import { useContext } from 'react';
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Delete } from '@mui/icons-material';
import { DataContext } from '../../context/DataProvider';

const StyledCard = styled(Card)`
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    width: 240px;
    margin: 8px;
    box-shadow: none;
`

const DeleteNote = ({note}) => {

    const { notes, setNotes, setAcrchiveNotes, deleteNotes, setDeleteNotes } = useContext(DataContext);

    const restoreNote = (note) => {
        const updatedNotes = deleteNotes.filter(data => data.id !== note.id);
        setDeleteNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);
    }

    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setDeleteNotes(updatedNotes);
    }

    return(
        <StyledCard>
            <CardContent>
                <Typography>{note.heading}</Typography>
                <Typography>{note.text}</Typography>
            </CardContent>
            <CardActions>
            <Delete 
                fontSize="small"
                onClick={() => deleteNote(note)}
                style={{ marginLeft: 'auto' }}
                />
                <Restore 
                fontSize="small" 
                onClick={() => restoreNote(note)}
                />
            </CardActions>
        </StyledCard>
    )
}

export default DeleteNote;