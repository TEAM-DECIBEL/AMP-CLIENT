export interface AuthStatusResponse {
  authenticated: boolean;
  email: string;
  userType: "AUDIENCE"| "ORGANIZER"| null;
}
