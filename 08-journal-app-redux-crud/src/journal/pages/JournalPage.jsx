import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store/journal';
// import { MailOutline } from '@mui/icons-material';

export const JournalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {

    dispatch(startNewNote());

  }

  return (
    <JournalLayout>
      {/* <Typography>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit accusantium numquam maiores, dolores nobis eveniet voluptatum porro odio vitae illum similique perspiciatis minima accusamus rerum reiciendis aliquam distinctio possimus id!</Typography> */}
      
      {/* <MailOutline /> */}
      {
        (!!!active) 
        ? <NothingSelectedView/>
        : <NoteView/>
      }


      <IconButton
        disabled={ isSaving }
        onClick={ onClickNewNote }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>

    </JournalLayout>
  )
}
