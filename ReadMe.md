## Study For PM2

With normal expressjs projects we often use nodemon, which is a good tool to use for simple development environment. However, with the use of PM2 we can directly manage a myraid of components about our API directly as PM2 is a process manager. This means that we can manage multiple instances of our express api on different ports. 

To add more to this project I also chose to include the use of docker and graphql. 

### How to start

Command to start the application on a default port
**Note**: This will open an instance of the API that runs on the preset port. This process will run in the background even if you close the application with ctrl + c
```bash
npm run start 
```

To stop all processes of the application.

```bash
npm run stop
```

