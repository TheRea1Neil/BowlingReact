// In a React component file
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bowler } from '../types/Bowler';

const BowlersList = () => {
  const [bowlers, setBowlers] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchTeamName = async (teamId: any) => {
      try {
        const response = await axios.get(
          `http://localhost:5260/api/team/${teamId}`,
        );
        return response.data;
      } catch (error) {
        console.error('Error fetching team name', error);
        return 'No team'; // Fallback team name
      }
    };

    const fetchBowlers = async () => {
      try {
        const response = await axios.get('http://localhost:5260/api/bowler');
        const bowlersData = response.data;

        // Fetch team name for each bowler
        const bowlersWithTeamNames = await Promise.all(
          bowlersData.map(async (bowler: any) => {
            const teamName = await fetchTeamName(bowler.teamId);
            return { ...bowler, teamName }; // Add the teamName to the bowler object
          }),
        );

        // Filter bowlers based on team name
        const filteredBowlers = bowlersWithTeamNames.filter(
          (bowler: any) =>
            bowler.teamName === 'Marlins' || bowler.teamName === 'Sharks',
        );

        setBowlers(filteredBowlers);
      } catch (error) {
        console.error('Error fetching bowlers', error);
      }
    };

    fetchBowlers();
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Team</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((bowler) => (
            <tr key={bowler.bowlerId}>
              <td>{`${bowler.bowlerFirstName} ${bowler.bowlerMiddleInit ? bowler.bowlerMiddleInit + ' ' : ''}${bowler.bowlerLastName}`}</td>
              <td>{bowler.teamName || 'No team'}</td>
              <td>{bowler.bowlerAddress}</td>
              <td>{bowler.bowlerCity}</td>
              <td>{bowler.bowlerState}</td>
              <td>{bowler.bowlerZip}</td>
              <td>{bowler.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BowlersList;
