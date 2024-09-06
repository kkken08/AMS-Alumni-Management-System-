import {
  AppBar,
  Typography,
  Toolbar,
  Button,
  TextField,
  Card,
  CardContent,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

export default function SearchPage() {
  return (
    <main className="flex min-h-max	 flex-col bg-gradient-to-r from-cyan-500 to-blue-500">
      <AppBar position="static" className="mb-6">
        <Toolbar className="flex justify-between">
          <Typography variant="h6" component="div">
            Alumni Management System - Search
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
          <h2 className="text-3xl font-bold mb-4 text-center text-white">Search Posts and People</h2>
    

          <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
            <TextField
              label="Search"
              fullWidth
              variant="outlined"
              className="bg-gray-200"
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
        </div>

          {/* Search Results for Posts */}
          <div className="mb-8">
            <Typography variant="h6" className="mb-4 text-white">
              Search Results for Posts
            </Typography>
            <Card className="bg-white p-6 rounded-lg shadow-md mb-6">
              <CardContent>
                <Typography variant="h5" component="div" className="font-semibold mb-2">
                  Sample Post Title
                </Typography>
                <Typography variant="body2" color="textSecondary" className="mb-4">
                  This is a sample post content. It shows how a post will appear in the search results.
                </Typography>
                <Typography variant="body2" color="textSecondary" className="font-bold">
                  Posted by: John Doe
                </Typography>
              </CardContent>
            </Card>

            <Card className="bg-white p-6 rounded-lg shadow-md">
              <CardContent>
                <Typography variant="h5" component="div" className="font-semibold mb-2">
                  Another Post Title
                </Typography>
                <Typography variant="body2" color="textSecondary" className="mb-4">
                  Here's another post example with its content displayed in the search results.
                </Typography>
                <Typography variant="body2" color="textSecondary" className="font-bold">
                  Posted by: Jane Smith
                </Typography>
              </CardContent>
            </Card>
          </div>

          {/* Search Results for People */}
          <div>
            <Typography variant="h6" className="mb-4 text-white">
              Search Results for People
            </Typography>
            <List className="bg-white rounded-lg shadow-md">
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="John Doe" secondary="john.doe@example.com" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Jane Smith" secondary="jane.smith@example.com" />
              </ListItem>
            </List>
          </div>
        </section>
      </div>
    </main>
  );
}
