import { useContext } from 'react';

import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { DataContext } from '../../context/DataProvider';



//components
import DeleteNote from './DeleteNote';



const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
    const { deleteNotes } = useContext(DataContext);
    return(
        <Box sx={{ display: 'flex', width: '100%' }}>
            <Box sx={{ p: 3, width: '100%' }}>
                <DrawerHeader />
                <Grid container style={{ marginTop: 16 }}>
                    {
                        deleteNotes.map(note => (
                            <Grid item>
                                <DeleteNote note={note} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}
export default DeleteNotes;