To run the application, first of all, make sure that the docker app is installed on your device by typing the `docker -v` on your terminal

After that just hit the `yarn docker-build` command
This command will create an image based on the Dockerfile and after that will run the container

To avoid the CORS policy rule `Referrer Policy: strict-origin-when-cross-origin`,
and to make this application work with a backend [URL](https://barcelona-urban-mobility-graphql-api.netlify.app/graphql), 
it is needed to run the command:
`open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security --disable-site-isolation-trials`. 

It allows us to use Chrome with a disabled CORS policy.
