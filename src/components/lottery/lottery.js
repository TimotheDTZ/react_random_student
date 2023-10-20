import React, { useState } from 'react';
import './lottery.css';
import { Participants } from '../participants/participant';
import { useAbsentContext } from '../absents/absentContext';

function Lottery() {
    const { absentGuysList, absentGirlsList } = useAbsentContext();
    const [winner, setWinner] = useState(null);

    const selectWinner = () => {
        const availableParticipants = Participants.filter(
            (participant) =>
                !absentGuysList.includes(participant.nom) &&
                !absentGirlsList.includes(participant.nom)
        );

        if (availableParticipants.length === 0) {
            setWinner(null);
        } else {
            const randomIndex = Math.floor(Math.random() * availableParticipants.length);
            const selectedWinner = availableParticipants[randomIndex];
            setWinner(selectedWinner);
        }
    };

    return (
        <div className="lottery-container">
            <button className="lottery-button" onClick={selectWinner}>
                🎰 Sélectionner une personne 🎰
            </button>
            <div className="result-box">
                {winner ? (
                    <p>
                        <strong>{winner.nom}</strong> {winner.genre === "Fille" ? '🌸' : '🚗'}<br />
                        {winner.genre === "Fille" ? 'Tu es la grande gagnante !' : 'Tu es le grand gagnant !'}
                    </p>
                ) : (
                    <p>Personne n’a été sélectionné actuellement 👀</p>
                )}
            </div>
        </div>
    );
}

export default Lottery;
