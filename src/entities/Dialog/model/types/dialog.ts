interface DialogUser {
  id: string;
  username: string;
  avatar?: string;
}

interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
}

export interface Dialog {
  id: string;
  users: DialogUser[];
  messages?: Message[];
  lastMessage?: string;
}