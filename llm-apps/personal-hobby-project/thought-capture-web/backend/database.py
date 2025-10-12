"""
Database configuration and initialization for SQLite
"""
import sqlite3
from typing import List, Optional
from datetime import datetime


class Database:
    """SQLite database handler for thoughts"""
    
    def __init__(self, db_name: str = "thoughts.db"):
        self.db_name = db_name
        self.init_database()
    
    def get_connection(self):
        """Get database connection"""
        conn = sqlite3.connect(self.db_name)
        conn.row_factory = sqlite3.Row
        return conn
    
    def init_database(self):
        """Initialize database with thoughts table"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS thoughts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                topic TEXT NOT NULL,
                content TEXT NOT NULL,
                thought_date TEXT,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        conn.commit()
        conn.close()
    
    def add_thought(self, topic: str, content: str, thought_date: Optional[str] = None) -> int:
        """Add a new thought to database"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        cursor.execute(
            'INSERT INTO thoughts (topic, content, thought_date) VALUES (?, ?, ?)',
            (topic, content, thought_date)
        )
        
        thought_id = cursor.lastrowid
        conn.commit()
        conn.close()
        
        return thought_id
    
    def get_all_thoughts(self) -> List[dict]:
        """Retrieve all thoughts"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        cursor.execute('SELECT * FROM thoughts ORDER BY created_at DESC')
        rows = cursor.fetchall()
        
        thoughts = [dict(row) for row in rows]
        conn.close()
        
        return thoughts
    
    def get_thoughts_by_topic(self, topic: str) -> List[dict]:
        """Retrieve thoughts filtered by topic"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        cursor.execute(
            'SELECT * FROM thoughts WHERE topic = ? ORDER BY created_at DESC',
            (topic,)
        )
        rows = cursor.fetchall()
        
        thoughts = [dict(row) for row in rows]
        conn.close()
        
        return thoughts
    
    def delete_thought(self, thought_id: int) -> bool:
        """Delete a thought by ID"""
        conn = self.get_connection()
        cursor = conn.cursor()
        
        cursor.execute('DELETE FROM thoughts WHERE id = ?', (thought_id,))
        deleted = cursor.rowcount > 0
        
        conn.commit()
        conn.close()
        
        return deleted
