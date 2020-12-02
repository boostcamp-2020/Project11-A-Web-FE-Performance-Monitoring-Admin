import React, { useState, FC } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  content?: string;
  link: string;
}

const AlertDialog: FC<Props> = ({
  title,
  content,
  link,
}: Props): JSX.Element => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        {content && <DialogContentText>{content}</DialogContentText>}
      </DialogContent>
      <DialogActions>
        <Link to={link}>
          <Button onClick={handleClose}>확인</Button>
        </Link>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;
