import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  TextField,
  Card,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
} from "@mui/material";
import Link from "next/link";
import SendIcon from "@mui/icons-material/Send";
import CommentIcon from "@mui/icons-material/Comment";
import SearchIcon from "@mui/icons-material/Search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <AppBar position="static" className="mb-6">
        <Toolbar className="flex justify-between">
          <Typography variant="h6" component="div">
            Alumni Management System - Forum
          </Typography>
          <div className="flex space-x-4">
            <Button variant="contained" color="secondary" component={Link} href="/home">
              Home
            </Button>
            <Button variant="contained" color="secondary" component={Link} href="/news">
              News
            </Button>
            <Button variant="contained" color="secondary" component={Link} href="/about">
              About
            </Button>
            <Button variant="contained" color="secondary" component={Link} href="/login">
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <div className="mt-16 max-w-5xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 text-center text-white">Alumni Forum</h2>
          <p className="text-center text-white mb-6">
            Share your thoughts, ask questions, and connect with fellow alumni.
          </p>


          {/* Add a "Go to Search Page" Button */}
          <div className="text-center mb-8">
            <Button
              variant="contained"
              color="primary"
              component={Link}
              href="/search"
              startIcon={<SearchIcon />}
            >
              Go to Search Page
            </Button>
          </div>

          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <Typography variant="h6" component="div" className="mb-4">
              Create a New Post
            </Typography>
            <TextField
              label="Title"
              fullWidth
              variant="outlined"
              className="mb-4"
              value="Sample Post Title"
            />
            <TextField
              label="Content"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              className="mb-4"
              value="This is an example content for a new post. The UI shows how it will look." 
            />
            <Button variant="contained" color="primary" endIcon={<SendIcon />}>
              Post
            </Button>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card className="bg-white p-6 rounded-lg shadow-md">
            <CardContent>
              <Typography variant="h5" component="div" className="font-semibold mb-2">
                Welcome to the Alumni Forum!
              </Typography>
              <Typography variant="body2" color="textSecondary" className="mb-4">
                Feel free to start discussions or ask questions. This is an example post.
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton color="primary">
                <CommentIcon />
              </IconButton>
              <Typography variant="body2" color="textSecondary">
                2 Comments
              </Typography>
            </CardActions>

            <Collapse in={true} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2" color="textSecondary" className="mb-2">
                  This is an example comment 1.
                </Typography>
                <Typography variant="body2" color="textSecondary" className="mb-4">
                  This is an example comment 2.
                </Typography>
                <TextField
                  label="Add a comment"
                  fullWidth
                  variant="outlined"
                  className="mb-4"
                  value="Sample comment"
                />
                <Button variant="contained" color="primary" endIcon={<SendIcon />}>
                  Comment
                </Button>
              </CardContent>
            </Collapse>
          </Card>

          <Card className="bg-white p-6 rounded-lg shadow-md">
            <CardContent>
              <Typography variant="h5" component="div" className="font-semibold mb-2">
                How to Stay Connected with Alumni?
              </Typography>
              <Typography variant="body2" color="textSecondary" className="mb-4">
                Looking for ways to stay in touch with fellow alumni? Here are some tips...
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton color="primary">
                <CommentIcon />
              </IconButton>
              <Typography variant="body2" color="textSecondary">
                1 Comment
              </Typography>
            </CardActions>

            <Collapse in={true} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant="body2" color="textSecondary" className="mb-4">
                  This is a static comment example.
                </Typography>
                <TextField
                  label="Add a comment"
                  fullWidth
                  variant="outlined"
                  className="mb-4"
                  value="Sample comment" 
                />
                <Button variant="contained" color="primary" endIcon={<SendIcon />}>
                  Comment
                </Button>
              </CardContent>
            </Collapse>
          </Card>
        </section>
      </div>
    </main>
  );
}
