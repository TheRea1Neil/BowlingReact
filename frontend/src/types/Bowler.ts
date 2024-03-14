// Bowler.ts
export interface Team {
  teamId: number;
  teamName: string;
  captainId?: number; // Assuming captainId is optional
  // Other team properties if necessary
}

export interface Bowler {
  teamName: string;
  bowlerId: number;
  bowlerFirstName: string;
  bowlerMiddleInit?: string; // Middle initial might be optional
  bowlerLastName: string;
  teamId: number;
  team?: Team; // This will include the Team Name when populated
  bowlerAddress: string;
  bowlerCity: string;
  bowlerState: string;
  bowlerZip: string;
  bowlerPhoneNumber: string;
  // Any other properties related to the bowler
}

// Use this interface when fetching and displaying data in your components.
