"use strict";(self.webpackChunk_lodestar_docs=self.webpackChunk_lodestar_docs||[]).push([[6764],{9287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(4848),o=n(8453);const i={title:"Heap Dumps"},s="Heap Dump Analysis",r={id:"tools/heap-dumps",title:"Heap Dumps",description:"There are a number of reason why one would want to do a heap dump but in particular, they are helpful for find memory intensive operations and leaks. There are two major types of heap dumps that are available to node developers. The first is a JavaScript heap dump, and the second is a native heap dump. The JS heap dump is much more common and is the default heap dump that is generated by node. It is useful when analyzing JS generated objects that are managed by the runtime. However there is one major limitation to the JS heap dump, and that is that it does not include native objects. This is where the native heap dump comes in handy. The native heap dump is a snapshot of the entire process memory, and includes objects that are allocated by C/C++ code, including native modules in use by the application. The limitation to the native heap dump is that it will not include any JS objects that are allocated by the V8 runtime. Those are generally created within mmap'ed pages and the native heap dump tools are specific to C objects that are created with malloc and destroyed via free. C++ is also covered as new and delete are wrappers around malloc and free. This is why it is important to understand how to analyze both types of memory usage.",source:"@site/pages/tools/heap-dumps.md",sourceDirName:"tools",slug:"/tools/heap-dumps",permalink:"/lodestar/tools/heap-dumps",draft:!1,unlisted:!1,editUrl:"https://github.com/ChainSafe/lodestar/tree/unstable/docs/pages/tools/heap-dumps.md",tags:[],version:"current",frontMatter:{title:"Heap Dumps"},sidebar:"tutorialSidebar",previous:{title:"Flame Graphs",permalink:"/lodestar/tools/flamegraphs"},next:{title:"Core Dumps",permalink:"/lodestar/tools/core-dumps"}},l={},d=[{value:"JavaScript Heap Dump",id:"javascript-heap-dump",level:2},{value:"Creating a <code>V8</code> heap dump",id:"creating-a-v8-heap-dump",level:3},{value:"Viewing a <code>V8</code> heap dump",id:"viewing-a-v8-heap-dump",level:3},{value:"Analyzing a <code>V8</code> heap dump",id:"analyzing-a-v8-heap-dump",level:3},{value:"Native Heap Dump",id:"native-heap-dump",level:2},{value:"Build collection tools",id:"build-collection-tools",level:3},{value:"Collect a heap dump",id:"collect-a-heap-dump",level:3},{value:"Collecting a heap dump on a running process",id:"collecting-a-heap-dump-on-a-running-process",level:3},{value:"Installing <code>heaptrack-gui</code> on Linux",id:"installing-heaptrack-gui-on-linux",level:3},{value:"Installing <code>heaptrack-gui</code> on OSX",id:"installing-heaptrack-gui-on-osx",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"heap-dump-analysis",children:"Heap Dump Analysis"}),"\n",(0,a.jsxs)(t.p,{children:["There are a number of reason why one would want to do a heap dump but in particular, they are helpful for find memory intensive operations and leaks. There are two major types of heap dumps that are available to node developers. The first is a JavaScript heap dump, and the second is a native heap dump. The JS heap dump is much more common and is the default heap dump that is generated by ",(0,a.jsx)(t.code,{children:"node"}),". It is useful when analyzing JS generated objects that are managed by the runtime. However there is one major limitation to the JS heap dump, and that is that it does not include native objects. This is where the native heap dump comes in handy. The native heap dump is a snapshot of the entire process memory, and includes objects that are allocated by ",(0,a.jsx)(t.code,{children:"C/C++"})," code, including native modules in use by the application. The limitation to the native heap dump is that it will not include any JS objects that are allocated by the ",(0,a.jsx)(t.code,{children:"V8"})," runtime. Those are generally created within ",(0,a.jsx)(t.code,{children:"mmap"}),"'ed pages and the native heap dump tools are specific to ",(0,a.jsx)(t.code,{children:"C"})," objects that are created with ",(0,a.jsx)(t.code,{children:"malloc"})," and destroyed via ",(0,a.jsx)(t.code,{children:"free"}),". ",(0,a.jsx)(t.code,{children:"C++"})," is also covered as ",(0,a.jsx)(t.code,{children:"new"})," and ",(0,a.jsx)(t.code,{children:"delete"})," are wrappers around ",(0,a.jsx)(t.code,{children:"malloc"})," and ",(0,a.jsx)(t.code,{children:"free"}),". This is why it is important to understand how to analyze both types of memory usage."]}),"\n",(0,a.jsx)(t.h2,{id:"javascript-heap-dump",children:"JavaScript Heap Dump"}),"\n",(0,a.jsxs)(t.p,{children:["Node has built in ",(0,a.jsx)(t.code,{children:"V8"})," heap dump access and its a very powerful tool for analyzing memory usage. Understanding how the dump is created will both help to understand how it is displayed and how to use the analysis more effectively."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"V8"})," heap dump is a stop the world process because walking the entire heap graph is necessary to create one. This is similar to a full, major garbage collection event. The VM starts at the heap entrance node and walks the entire graph and makes note of every edge that connects each node along the way. Nodes are JSObjects and edges are references between those objects."]}),"\n",(0,a.jsxs)(t.p,{children:["By time the whole heap is walked the full size and values of all nodes are known and all of the connections between those nodes is well understood. The object that is returned is a set of three arrays, the nodes, the edges and the string values that are encountered (because strings are themselves arrays of characters in ",(0,a.jsx)(t.code,{children:"C"})," so they are treated a bit differently by ",(0,a.jsx)(t.code,{children:"V8"}),")."]}),"\n",(0,a.jsxs)(t.h3,{id:"creating-a-v8-heap-dump",children:["Creating a ",(0,a.jsx)(t.code,{children:"V8"})," heap dump"]}),"\n",(0,a.jsxs)(t.p,{children:["There are two functions for creating a heap dump but both call the same functionality under the hood. One streams the result, ",(0,a.jsx)(t.code,{children:'require("v8").getHeapSnapshot([options])'}),', and is primarily intended for use by the Chrome devtools button to "take a snapshot". The second writes the heap dump to a file, ',(0,a.jsx)(t.code,{children:'require("v8").writeHeapSnapshot(filename[,options])'}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The optional ",(0,a.jsx)(t.code,{children:"options"})," argument, in both cases, is the same and contains two props.",(0,a.jsx)(t.code,{children:"exposeInternals"})," and ",(0,a.jsx)(t.code,{children:"exposeNumericValues"})," to enrich the dump. In many cases its the application layer that one wants to debug so ",(0,a.jsx)(t.code,{children:"exposeInternals"})," is not usually necessary. In ",(0,a.jsx)(t.code,{children:"V8"})," numbers are stored as 32bit integers and the size of pointers is also 32bits. So as an optimization, the pointer to the numeric value can be eliminated and the value itself can be stored in the ",(0,a.jsx)(t.code,{children:"Address"})," of the ",(0,a.jsx)(t.code,{children:"Value"})," instead. ",(0,a.jsx)(t.code,{children:"exposeNumericValues"}),' transcribes those "pointers" to the actual numeric value and appends them to the dump.']}),"\n",(0,a.jsxs)(t.p,{children:["Because heap analysis happens frequently during Lodestar development there is a helper api endpoint to capture a heap dump. ",(0,a.jsx)(t.strong,{children:"It is IMPORTANT"})," that this endpoint is not public facing as it will open the threat of DDOS attack."]}),"\n",(0,a.jsxs)(t.p,{children:["The endpoint accepts a ",(0,a.jsx)(t.code,{children:"POST"})," request and you may include an optional ",(0,a.jsx)(t.code,{children:"dirpath"})," query parameter to specify the directory where the heap dump will be written. If the ",(0,a.jsx)(t.code,{children:"dirpath"})," is not specified then the heap dump will be written to the current working directory."]}),"\n",(0,a.jsx)(t.p,{children:"To create a Lodestar heap dump you can use the following command:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"curl -X POST http://localhost:9596/eth/v1/lodestar/write_heapdump?dirpath=/some/directory/path\n"})}),"\n",(0,a.jsxs)(t.h3,{id:"viewing-a-v8-heap-dump",children:["Viewing a ",(0,a.jsx)(t.code,{children:"V8"})," heap dump"]}),"\n",(0,a.jsxs)(t.p,{children:["It is best to analyze on a local development machine so if Lodestar is running on a cloud instance download the dump to the local environment. Open Chrome, or any Chromium based browser (the example photos were taken using Brave). In the url bar type ",(0,a.jsx)(t.code,{children:"chrome:://inspect"})," to bring up the DevTools menu (in brave the url will be rewritten to ",(0,a.jsx)(t.code,{children:"brave://inspect"}),")."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"DevTools",src:n(5376).A+"",width:"3456",height:"2234"})}),"\n",(0,a.jsxs)(t.p,{children:["Click on the ",(0,a.jsx)(t.code,{children:"Open dedicated DevTools for Node"})," link to open the node specific window and click on the ",(0,a.jsx)(t.code,{children:"Memory"})," tab as shown below."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Memory Tab",src:n(8729).A+"",width:"3456",height:"2234"})}),"\n",(0,a.jsxs)(t.p,{children:["Load the profile by either right clicking on the left pane or by clicking the ",(0,a.jsx)(t.code,{children:"Load"})," button at the bottom."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Load Profile",src:n(914).A+"",width:"3456",height:"2234"})}),"\n",(0,a.jsxs)(t.h3,{id:"analyzing-a-v8-heap-dump",children:["Analyzing a ",(0,a.jsx)(t.code,{children:"V8"})," heap dump"]}),"\n",(0,a.jsx)(t.p,{children:"Analysis is as much an art as it is a science and the best way to learn is to do it a few times. Generally the goal is looking for memory leaks but reducing memory overhead is also something that happens. This guide will focus on leaks. With memory leaks one is looking for why objects have references that prevent them from being garbage collected."}),"\n",(0,a.jsxs)(t.p,{children:["To spot sources of leaks, focus on objects that have large quantities or very large ",(0,a.jsx)(t.code,{children:"retained size"}),". Retained size is the amount of memory that would be freed if the object was garbage collected. As an example if there is an object that has lots and lots of instances, like 100,000, and they are all pushed into an array then the array will have a very large retained size. This is because the array is holding references to all of the objects that it contains."]}),"\n",(0,a.jsx)(t.p,{children:"If it is not immediately apparent what objects are being leaked then another tool in your arsenal will be to take a second snapshot and compare it to the first. This will show what objects have been created/changed since the first snapshot."}),"\n",(0,a.jsx)(t.p,{children:"If there is an object that has a large retained size but is roughly the same, but not exactly the same, changes are that is NOT the leak. Some objects can get quite large during runtime but if its roughly the same size over time, but not exactly the same, it means that the application is modifying the object (why its not exactly identical in size) but if it hasn't grown significantly over time it can be assumed it is probably the working size of the instances."}),"\n",(0,a.jsx)(t.p,{children:"Try to focus on objects that are growing in size or in number over time. Growing in size means the object is holding references to other objects and growing in number means a function closure somewhere is retaining the small instances."}),"\n",(0,a.jsx)(t.p,{children:"That is the science part, but these clues are just breadcrumbs to follow. In order to actually resolve the leak, one needs to go into the code to figure out where those objects are being created, or more often, why the references to them are being retained. This is where the art comes in."}),"\n",(0,a.jsx)(t.p,{children:"Having a good understanding of the codebase will help to narrow down where to look. It is also common that the leak is not coming directly from Lodestar code, but rather one of the dependencies so be careful not to rule those out."}),"\n",(0,a.jsx)(t.h2,{id:"native-heap-dump",children:"Native Heap Dump"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:(0,a.jsx)(t.strong,{children:"note: collecting a native heap dump is only supported on linux, analysis can be done from linux or Mac"})})}),"\n",(0,a.jsxs)(t.p,{children:["There are several tools that can be used to do native heap dump analysis. The most common are ",(0,a.jsx)(t.a,{href:"https://valgrind.org/docs/manual/ms-manual.html",children:(0,a.jsx)(t.code,{children:"massif"})})," from the ",(0,a.jsx)(t.a,{href:"https://valgrind.org/",children:(0,a.jsx)(t.code,{children:"Valgrind"})})," suite, google's ",(0,a.jsx)(t.a,{href:"https://github.com/gperftools/gperftools",children:(0,a.jsx)(t.code,{children:"gperftools"})})," and ",(0,a.jsx)(t.code,{children:"heaptrack"})," from ",(0,a.jsx)(t.a,{href:"https://community.kde.org/Main_Page",children:"KDE"}),". Of the three, ",(0,a.jsx)(t.code,{children:"heaptrack"})," is the most user friendly tool, and it is specifically designed for the task. It is much faster than ",(0,a.jsx)(t.code,{children:"Valgrind"}),", easier to integrate than ",(0,a.jsx)(t.code,{children:"gperftools"})," and also includes a gui for result analysis. Often times there are also memory allocations that are not related to memory leaks, and tools like ",(0,a.jsx)(t.code,{children:"Valgrind"})," and ",(0,a.jsx)(t.code,{children:"gperftools"})," become less useful. This is why ",(0,a.jsx)(t.code,{children:"heaptrack"})," is the recommended tool for heap dump analysis on Lodestar."]}),"\n",(0,a.jsxs)(t.p,{children:["There are a few things that will make the results with ",(0,a.jsx)(t.code,{children:"heaptrack"})," far better. The most important is using debug builds of all libraries included in a binary, including the application itself. This will make the results usable. Not to say that they will be useless without debug symbols but it will be kinda tough to optimize functions without knowing the function names nor the file and line numbers."]}),"\n",(0,a.jsxs)(t.p,{children:["This is the heart of what ",(0,a.jsx)(t.code,{children:"heaptrack"})," will do for us. It hooks into the memory allocation and adds in stack traces for each ",(0,a.jsx)(t.code,{children:"malloc"})," call site. That way every time memory is reserved there is a way to track back where it happened in the code. ",(0,a.jsx)(t.code,{children:"heaptrack"})," also hooks into the ",(0,a.jsx)(t.code,{children:"free"})," function and checks that versus the allocations to check for memory leaks and for temporary variables that can be optimized. This also allows for optimization of how many of each object is created by identifying high frequency allocations."]}),"\n",(0,a.jsxs)(t.p,{children:["Generally the .heapdump file will be created on a cloud server and then copied to a local machine for analysis, mostly because the gui is not available through ssh. The gui is not required for analysis but it is much easier to use than the command line tools. The first step will be to install ",(0,a.jsx)(t.code,{children:"heaptrack"})," on the target server and to capture a profile."]}),"\n",(0,a.jsx)(t.h3,{id:"build-collection-tools",children:"Build collection tools"}),"\n",(0,a.jsx)(t.p,{children:"Assume the following directory structure:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"\u251c\u2500\u2500 beacon-node\n\u2502\xa0\xa0 \u251c\u2500\u2500 db\n\u2502\xa0\xa0 \u251c\u2500\u2500 logs\n\u2502\xa0\xa0 \u251c\u2500\u2500 start-lodestar.sh\n\u2502\xa0\xa0 \u2514\u2500\u2500 rc-config.yml\n\u251c\u2500\u2500 lodestar\n\u2514\u2500\u2500 node # step below will clone this repo\n"})}),"\n",(0,a.jsxs)(t.p,{children:["We will start from the directory that contains ",(0,a.jsx)(t.code,{children:"lodestar"})," and the ",(0,a.jsx)(t.code,{children:"beacon-node"})," files."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:'# Install heaptrack\n$ sudo apt-get update\n$ sudo apt-get -y install heaptrack\n\n# Using a debug build of node is recommended and it can be build\n# from source. Clone the node repo to get started.\n$ git clone https://github.com/nodejs/node.git\n$ cd node\n\n# Use whichever version of node you prefer\n$ git checkout v20.10.0\n$ ./configure --debug\n\n# This command only builds the debug version of node and assumes\n# that a release version of node is already installed on the system\n$ make -C out BUILDTYPE=Debug -j$(nproc --all)\n\n# Move the debug version of node the same folder that the release\n# version is installed in and name it `node_debug`.  This will put the\n# debug binary on the path and allow you to run it with the\n# `node_debug` command\n$ cp out/Debug/node "$(which node)_debug"\n$ which node_debug\n/your/home/directory/.nvm/versions/node/v20.10.0/bin/node_debug\n\n# Return to the lodestar repo\n$ cd ../lodestar\n\n# Clean the build artifacts and node_modules\n$ yarn clean && yarn clean:nm\n\n# Install the dependencies\n$ yarn install\n\n# Ensure that all native modules are rebuilt with debug symbols. Some\n# modules are prebuilt, like classic-level, and the debug symbols may\n# not be included. If the debugging exercise is focussed around\n# one of these dependencies, then you will need to manually clone those\n# repos and manually build them with debug symbols.\n$ npm rebuild --debug\n'})}),"\n",(0,a.jsx)(t.h3,{id:"collect-a-heap-dump",children:"Collect a heap dump"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"# Move to th `beacon-node` directory\n$ cd ../beacon-node\n\n# Start lodestar with profiling enabled\n$ heaptrack \\\n$   --output ./lodestar.heapdump \\\n$   node_debug \\\n$   --max-old-space-size=8192 \\\n$   ../lodestar/packages/cli/bin/lodestar.js \\\n$   beacon \\\n$   --rcConfig ./rc-config.yml \\\n$   > /dev/null 2>&1 &\n# Wait some period of time for the heap dump data to be collected\n\n# The data will not be persisted until the process is stopped. You can gracefully\n# stop the process with the following command and if you want to hard kill it\n# add `-9` to the end of the `kill` command although that should not be necessary\n$ ps aux | grep lodestar | grep -v grep | awk '{print $2}' | head -n 1 | xargs kill\n"})}),"\n",(0,a.jsx)(t.h3,{id:"collecting-a-heap-dump-on-a-running-process",children:"Collecting a heap dump on a running process"}),"\n",(0,a.jsx)(t.p,{children:"Collecting a heap dump can also be done on a running process. There are both advantages and disadvantages to this approach. The main advantage is that you can collect a heap dump without having to restart. The down side is that the dump will only include allocations/de-allocations while the tracker is running. This means that all the non-paired calls to malloc/free will register as leaks. It will also not give a true representation of how the heap is being used. On the upside, however the dump will be much smaller in size."}),"\n",(0,a.jsxs)(t.p,{children:["It is important to note a warning that is in the ",(0,a.jsx)(t.code,{children:"heaptrack"})," source code:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"WARNING: Runtime-attaching heaptrack is UNSTABLE and can lead to CRASHES in your application, especially after you detach heaptrack again. You are hereby warned, use it at your own risk!"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:'# Move to th `beacon-node` directory\n$ cd ../beacon-node\n\n# Start lodestar\n$ node_debug \\\n$   --max-old-space-size=8192 \\\n$   ../lodestar/packages/cli/bin/lodestar.js \\\n$   beacon \\\n$   --rcConfig ./rc-config.yml \\\n$   > /dev/null 2>&1 &\n# Wait some period of time to start collecting the dump\n\n# GDB is required to inject heaptrack into a running process\n# so you may need to install it\n$ sudo apt-get update\n$ sudo apt-get install -y gdb\n\n# Elevated `perf` permissions are also required depending on your\n# system configuration. Change until the next reboot\n$ echo 0 | sudo tee /proc/sys/kernel/yama/ptrace_scope\n\n# Get the pid of the lodestar process\n$ export LODESTAR_PID=$(ps aux | grep lodestar | grep -v grep | awk \'{print $2}\' | head -n 1)\n\n# Inject heaptrack into the running process\n$ heaptrack --pid $LODESTAR_PID\n\nheaptrack output will be written to "/home/user/beacon-node/heaptrack.node_debug.111868.zst"\n/usr/lib/heaptrack/libheaptrack_preload.so\ninjecting heaptrack into application via GDB, this might take some time...\ninjection finished\n# Wait some period of time to collect the heap dump. See below\n# for the termination command that can be run from a separate\n# terminal when ready to stop collecting data\nTerminated\nremoving heaptrack injection via GDB, this might take some time...\nHeaptrack finished! Now run the following to investigate the data:\n\n  heaptrack --analyze "/home/user/beacon-node/heaptrack.node_debug.111868.zst"\n'})}),"\n",(0,a.jsxs)(t.p,{children:["There is a trap in ",(0,a.jsx)(t.code,{children:"heaptrack"})," but the process uses a nested shell to do the actual injection so it is not possible to just Ctrl+C out of the injected process without corrupting the output file. To properly kill the collection one needs to target the nested shell pid. Here is a helper command to target that process:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"ps -ef | grep '[h]eaptrack --pid' | awk '$3 == '$(ps -ef | grep '[h]eaptrack --pid' | awk '$3 != 1 {print $2}' | head -n 1)' {print $2}' | xargs -r kill\n"})}),"\n",(0,a.jsx)(t.p,{children:"After working with the injected process for a while, I cannot honestly recommend it. It can work in a pinch, and is best suited for when the profiled process can be exited gracefully without repercussions (not on mainnet for instance). The benefit, though, is that the heapdump will be much smaller and targeted to runtime (will not have the transient, startup allocations) which can make it easier to see what is happening."}),"\n",(0,a.jsxs)(t.h3,{id:"installing-heaptrack-gui-on-linux",children:["Installing ",(0,a.jsx)(t.code,{children:"heaptrack-gui"})," on Linux"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:"# You can you apt, apt-get or aptitude to install the gui\n$ sudo apt-get update\n$ sudo apt-get install -y heaptrack-gui\n"})}),"\n",(0,a.jsxs)(t.h3,{id:"installing-heaptrack-gui-on-osx",children:["Installing ",(0,a.jsx)(t.code,{children:"heaptrack-gui"})," on OSX"]}),"\n",(0,a.jsx)(t.p,{children:'At the time of writing this there is no official pre-built binary for OSX. This was a bit of a challenge but it was WELL worth the effort as the tool works very well. There were a number of bugs along the way while "using the docs" so your mileage may vary, but this is what worked for me.'}),"\n",(0,a.jsx)(t.p,{children:"Most of the dependencies can be installed via Homebrew and the tool itself needs to be built from source. There was one dependency that needed to be built from source. This process assumes a working folder that the repos can be cloned into."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:'# Start in the root folder where the repos will be cloned\n$ brew install qt@5\n\n# prepare tap of kde-mac/kde\n$ brew tap kde-mac/kde https://invent.kde.org/packaging/homebrew-kde.git\n$ "$(brew --repo kde-mac/kde)/tools/do-caveats.sh"\n\n# install the kde-mac and other required dependencies\n$ brew install kde-mac/kde/kf5-kcoreaddons \\\n$     kde-mac/kde/kf5-kitemmodels \\\n$     kde-mac/kde/kf5-kconfigwidgets \\\n$     kde-mac/kde/kdiagram \\\n$     extra-cmake-modules \\\n$     ki18n \\\n$     threadweaver \\\n$     boost \\\n$     zstd \\\n$     gettext\n\n# There is a bug in the current version of kde-mac/kde and one dependency needs\n# to be built manually. This is the workaround to get it built.\n$ git clone https://invent.kde.org/frameworks/kio.git\n$ mkdir kio/build\n$ cd kio/build\n$ export CMAKE_PREFIX_PATH=$(brew --prefix qt@5)\n$ cmake -G Ninja -DCMAKE_BUILD_TYPE=Release ..\n$ ninja\n$ sudo ninja install\n$ cd ../..\n\n# Now make sure that the dependencies are available to the system during runtime\n$ ln -sfv "$(brew --prefix)/share/kf5" "$HOME/Library/Application Support"\n$ ln -sfv "$(brew --prefix)/share/knotifications5" "$HOME/Library/Application Support"\n$ ln -sfv "$(brew --prefix)/share/kservices5" "$HOME/Library/Application Support"\n$ ln -sfv "$(brew --prefix)/share/kservicetypes5" "$HOME/Library/Application Support"\n\n# We are now ready to build the heaptrack_gui binaries for analysis on OSX\n$ git clone https://invent.kde.org/sdk/heaptrack.git\n$ cd heaptrack\n$ mkdir build\n$ cd build\n$ CMAKE_PREFIX_PATH=$(brew --prefix qt@5) PATH=$PATH:/opt/homebrew/opt/gettext/bin cmake ..\n$ cmake -DCMAKE_BUILD_TYPE=Release ..\n$ make heaptrack_gui\n$ sudo make install\n# You can now find heaptrack_gui with your gui Applications. It is default\n# placed as /Applications/KDE/heaptrack_gui.app\n'})})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5376:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/devtools-247fdbb015a564f3376c41f4726423cc.png"},914:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/load-profile-1a4f5d98c15c710de58f5edccd84319f.png"},8729:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/memory-tab-2606d8555ae2fc8d12d75e03d91e875f.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var a=n(6540);const o={},i=a.createContext(o);function s(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);