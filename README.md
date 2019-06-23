# react_first_project
First examples projects, clases with react JS



#CONFIGURATION

You must install and configure nodejs and npm.
It's necesary download and configre. Only follow next steps:

#Install basic package 

sudo apt-get install curl python-software-properties
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -

sudo apt-get install -y nodejs
sudo apt-get install npm

# Review our version
nodejs -v

#If you want to use webpack by command line, you need set webpack like global var
# In you folder,  write next command line:

npm install -g webpack 
or 
sudo npm install -D webpack-cli


#Install yarn
# Add the GPG Key
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -

#Add the Yarn Repository
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

#Update System and Install Yarn on Ubuntu
sudo apt update
sudo apt install yarn nodejs


##############
#FAQ
###############
#There are problems to install webpack about dependencies or version

sudo npm install --save-dev xxxxx


#ERROR in Entry module not found: Error: Can't resolve
Review paths config 
	Exmaple:
 entry: "./app/dist/index.js",
 path: __dirname + "/app/js",


 # Error: Can't resolve 'babel-loader' React
 https://stackoverflow.com/questions/44490481/cant-resolve-babel-loader

# ERROR in Cannot find module 'babel-core' React adn WEbpack
https://stackoverflow.com/questions/35215461/error-in-cannot-find-module-babel-core-using-react-js-webpack-and-express-s

# ReferenceError: Unknown plugin "react-html-attrs" specified in "base"
https://stackoverflow.com/questions/39939923/referenceerror-unknown-plugin-react-html-attrs-specified

#ReferenceError: Unknown plugin "transform-class.properties" specified in "base"
npm install babel-plugin-transform-class-properties babel-plugin-transform-decorators-legacy babel-plugin-transform-export-extensions babel-plugin-transform-object-rest-spread babel-preset-env --save-dev

npm i babel-plugin-transform-class-properties --save-dev