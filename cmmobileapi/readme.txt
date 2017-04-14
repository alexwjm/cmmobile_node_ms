1.for node_modules content, use below two way to make it there.
1>. package.json put the dependency blank, run below command in real env,then info will be updated to dependency part
npm install express -save
npm install mongoose -save
npm install body-parser -save
npm install fs -save
2>. package.json give detail content and run tcommand to install
npm install

2. mongo db install path:/usr/local/mongodb
3. mongod dbpath=/data/mongodb/mongodb_data/