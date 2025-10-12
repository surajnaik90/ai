"""
Pydantic models for request/response validation
"""
from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime
from enum import Enum


class TopicType(str, Enum):
    """Available topic types"""
    AI = "AI"
    WORLD_POLITICS = "World politics"
    MY_CAREER_EVENTS = "My career events"


class ThoughtCreate(BaseModel):
    """Model for creating a new thought"""
    topic: TopicType
    content: str = Field(..., min_length=1, max_length=10000)
    thought_date: Optional[str] = None  # Optional custom date for the thought


class ThoughtResponse(BaseModel):
    """Model for thought response"""
    id: int
    topic: str
    content: str
    thought_date: Optional[str] = None  # Custom date for the thought
    created_at: str  # Actual creation timestamp
    
    class Config:
        from_attributes = True


class MessageResponse(BaseModel):
    """Generic message response"""
    message: str
    id: Optional[int] = None
