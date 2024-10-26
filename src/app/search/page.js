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
  Box,
} from "@mui/material";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

export default function SearchPage() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* AppBar for navigation */}
      <AppBar position="static" sx={{ mb: 6 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6">Alumni Management System - Forum</Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/home" passHref>
              <Button color="inherit">Home</Button>
            </Link>
            <Link href="/news" passHref>
              <Button color="inherit">News</Button>
            </Link>
            <Link href="/about" passHref>
              <Button color="inherit">About</Button>
            </Link>
            <Link href="/login" passHref>
              <Button color="inherit">Logout</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
        <div className="mt-16 max-w-5xl mx-auto">
          <section className="mb-12">
            <Typography variant="h4" component="h2" className="mb-4 text-center text-gray-900">
              Search Posts and People
            </Typography>

            <div className="mb-8 bg-white p-4 rounded-lg shadow-md">
              <TextField
                label="Search"
                fullWidth
                variant="outlined"
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
              <Typography variant="h6" component="h3" className="mb-4 text-gray-900">
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
              <Typography variant="h6" component="h3" className="mb-4 text-gray-900">
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
      </Box>
    </main>
  );
}
