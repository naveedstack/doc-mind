/**
 * API Service
 * 
 * Placeholder API service for future backend integration.
 * All functions currently return mock data.
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

class ApiService {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Auth
  async login(email: string, password: string) {
    return this.request("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  }

  async signup(name: string, email: string, password: string) {
    return this.request("/auth/signup", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });
  }

  async forgotPassword(email: string) {
    return this.request("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
    });
  }

  // Documents
  async getDocuments() {
    return this.request("/documents");
  }

  async uploadDocument(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    return this.request("/documents/upload", {
      method: "POST",
      body: formData,
      headers: {},
    });
  }

  async deleteDocument(id: string) {
    return this.request(`/documents/${id}`, { method: "DELETE" });
  }

  // Sessions
  async getSessions() {
    return this.request("/sessions");
  }

  async getSession(id: string) {
    return this.request(`/sessions/${id}`);
  }

  async deleteSession(id: string) {
    return this.request(`/sessions/${id}`, { method: "DELETE" });
  }

  // Chat
  async getChatSessions() {
    return this.request("/chat/sessions");
  }

  async getChatMessages(sessionId: string) {
    return this.request(`/chat/sessions/${sessionId}/messages`);
  }

  async sendMessage(sessionId: string, content: string) {
    return this.request(`/chat/sessions/${sessionId}/messages`, {
      method: "POST",
      body: JSON.stringify({ content }),
    });
  }

  // Dashboard
  async getDashboardStats() {
    return this.request("/dashboard/stats");
  }

  async getRecentActivity() {
    return this.request("/dashboard/activity");
  }
}

export const api = new ApiService(API_BASE_URL);
