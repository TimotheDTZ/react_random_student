import React, { useState, useEffect } from 'react';
import './absents.css';
import { AiOutlineClose } from 'react-icons/ai';
import { Participants } from '../participants/participant';
import { useAbsentContext } from './absentContext';

function AbsentList() {
    const { absentGirlsList, addAbsentGirl, removeAbsentGirl, absentGuysList, addAbsentGuy, removeAbsentGuy } = useAbsentContext();

    const [selectedAbsent, setSelectedAbsent] = useState("");
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const filteredParticipants = Participants.filter(
            (participant) =>
                !absentGuysList.includes(participant.nom) &&
                !absentGirlsList.includes(participant.nom)
        );
        setParticipants(filteredParticipants);
    }, [absentGuysList, absentGirlsList]);

    const handleAddAbsent = () => {
        if (selectedAbsent) {
            const selectedParticipant = Participants.find(
                (participant) => participant.nom === selectedAbsent
            );
            if (selectedParticipant) {
                if (selectedParticipant.genre === "Fille") {
                    addAbsentGirl(selectedAbsent);
                } else {
                    addAbsentGuy(selectedAbsent);
                }
            }
            setSelectedAbsent("");
        }
    };

    const handleRemoveFromAbsentGuysList = (name) => {
        removeAbsentGuy(name);
    };

    const handleRemoveFromAbsentGirlsList = (name) => {
        removeAbsentGirl(name);
    };

    return (
        <div className="absent-list-container">
            <div className="column">
                <h2>Ajouter un(e) absent(e)</h2>
                <select
                    value={selectedAbsent}
                    onChange={(e) => setSelectedAbsent(e.target.value)}
                >
                    <option value="">Sélectionnez une personne</option>
                    {participants.map((participant, index) => (
                        <option key={index} value={participant.nom}>
                            {participant.nom}
                        </option>
                    ))}
                </select>
                <button onClick={handleAddAbsent}>Ajouter</button>
            </div>
            <div className="column">
                <h2>Liste des absents</h2>
                <ul>
                    {absentGuysList.map((absentGuy, index) => (
                        <li key={index}>
                            {absentGuy}<AiOutlineClose className='button-close' onClick={() => handleRemoveFromAbsentGuysList(absentGuy)} />
                        </li>
                    ))}
                </ul>
                <h2>Liste des absentes</h2>
                <ul>
                    {absentGirlsList.map((absentGirl, index) => (
                        <li key={index}>
                            {absentGirl} <AiOutlineClose className='button-close' onClick={() => handleRemoveFromAbsentGirlsList(absentGirl)} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AbsentList;
