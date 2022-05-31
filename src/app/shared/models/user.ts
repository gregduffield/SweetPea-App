export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoUrl: string;
  emailVerified: string;
}

export interface UserProfile {
  isAdmin: boolean;
}
