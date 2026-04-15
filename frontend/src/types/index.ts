export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  role: "free" | "premium";
}

export interface Document {
  id: string;
  title: string;
  fileType: "pdf" | "docx" | "txt" | "epub";
  status: "ready" | "processing" | "error";
  sizeBytes: number;
  tags: string[];
  addedAt: string;
  progressPercent?: number;
}

export interface Session {
  id: string;
  title: string;
  description?: string;
  status: "in_progress" | "completed" | "archived";
  startedAt: string;
  durationMinutes?: number;
  insightsCount?: number;
  thumbnailUrl?: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "ai";
  content: string;
  timestamp: string;
  citations?: Citation[];
}

export interface Citation {
  id: string;
  type: "pdf" | "web" | "note";
  author: string;
  title: string;
}

export interface ChatSession {
  id: string;
  title: string;
  lastMessage?: string;
  lastActiveAt: string;
  status: "active" | "previous";
  messagesCount?: number;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}
