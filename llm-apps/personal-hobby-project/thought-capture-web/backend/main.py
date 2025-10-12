"""
FastAPI backend for Thought Capture application
"""
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional
from models import ThoughtCreate, ThoughtResponse, MessageResponse, TopicType
from database import Database

app = FastAPI(
    title="Thought Capture API",
    description="API for capturing and retrieving thoughts on various topics",
    version="1.0.0"
)

# Configure CORS to allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],  # React dev servers
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize database
db = Database()


@app.get("/")
def read_root():
    """Root endpoint"""
    return {
        "message": "Welcome to Thought Capture API",
        "version": "1.0.0",
        "endpoints": {
            "docs": "/docs",
            "thoughts": "/api/thoughts"
        }
    }


@app.get("/api/topics", response_model=List[str])
def get_topics():
    """Get list of available topics"""
    return [topic.value for topic in TopicType]


@app.post("/api/thoughts", response_model=MessageResponse, status_code=201)
def create_thought(thought: ThoughtCreate):
    """
    Create a new thought
    
    - **topic**: Topic type (AI, World politics, My career events)
    - **content**: Thought content
    - **thought_date** (optional): Custom date for the thought (YYYY-MM-DD)
    """
    try:
        thought_id = db.add_thought(
            thought.topic.value, 
            thought.content,
            thought.thought_date
        )
        return MessageResponse(
            message="Thought created successfully",
            id=thought_id
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/api/thoughts", response_model=List[ThoughtResponse])
def get_thoughts(topic: Optional[str] = None):
    """
    Get all thoughts or filter by topic
    
    - **topic** (optional): Filter by topic type
    """
    try:
        if topic:
            # Validate topic
            valid_topics = [t.value for t in TopicType]
            if topic not in valid_topics:
                raise HTTPException(
                    status_code=400,
                    detail=f"Invalid topic. Must be one of: {', '.join(valid_topics)}"
                )
            thoughts = db.get_thoughts_by_topic(topic)
        else:
            thoughts = db.get_all_thoughts()
        
        return thoughts
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.delete("/api/thoughts/{thought_id}", response_model=MessageResponse)
def delete_thought(thought_id: int):
    """
    Delete a thought by ID
    
    - **thought_id**: ID of the thought to delete
    """
    try:
        deleted = db.delete_thought(thought_id)
        if not deleted:
            raise HTTPException(status_code=404, detail="Thought not found")
        
        return MessageResponse(message="Thought deleted successfully")
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "Thought Capture API"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
