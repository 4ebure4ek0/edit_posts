import { observer } from "mobx-react-lite"
import posts from "../store/postsStore"
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemText, TextField } from "@mui/material"
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone'
import { useState } from "react"

const Posts = observer(() => {
    const[open, setOpen] = useState(false)
    const [id, setId] = useState(0)
    const[text, setText] = useState(posts.posts[0])
    const openEdit = (e) => {
        setId(e.target.closest('li').dataset.id)
        setText(posts.posts[e.target.closest('li').dataset.id].text)
        setOpen(true)
    }
    const closeEdit = (e) => {
        setOpen(false)
    }
    const editPost = (e) => {
        setText(e.target.value)
    }
    const handleSubmit = () => {
        posts.handleSubmit(id, text)
        closeEdit()
    }
    return(
        <List  sx={{
            display: "flex", 
            flexDirection:'column', 
            gap: 3}}>
            {posts.posts.map((post, n) => (
            <ListItem sx={{
                boxShadow: '-1px 1px 8px 0px rgba(34, 60, 80, 0.2)'
            }} 
            key={n} 
            data-id={n}>
                <ListItemText primary={post.name} secondary={post.text}></ListItemText>
                <EditTwoToneIcon onClick={openEdit} color='action' sx={{
                    fontSize: 40,
                    cursor: "pointer",
                }}>
                </EditTwoToneIcon>
            </ListItem>))}
            <Dialog open={open} fullWidth={true}>
                    <DialogTitle>Edit post</DialogTitle>
                    <DialogContent sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                        <DialogContentText>{posts.posts[id].name}</DialogContentText>
                        <TextField fullWidth label='Edit your post here...' value={text} onChange={(e) => editPost(e)}></TextField>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={closeEdit}>Cancel</Button>
                        <Button variant="contained" onClick={handleSubmit}>Save</Button>
                    </DialogActions>
            </Dialog>
        </List>
    )
})

export default Posts