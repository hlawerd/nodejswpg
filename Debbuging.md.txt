
# Debugging

One of the key features of Visual Studio Code is its great debugging support. VS Code's built-in debugger helps accelerate your edit, 
compile and debug loop.


![Cover](https://code.visualstudio.com/assets/docs/editor/debugging/debugging_hero.png)

## Debugger extensions

VS Code has built-in debugging support for the Node.js runtime and can debug JavaScript, TypeScript, and any other language that gets transpiled to JavaScript.

For debugging other languages and runtimes (including PHP, Ruby, Go, C#, Python, C++, Powershell and many others), 
look for Debuggers extensions in our VS Code Marketplace or click on Install Additional Debuggers... in the top 
level Debug menu.

## Start debugging

-------------

The following documentation is based on the built-in Node.js debugger, but most of the concepts and features are 
applicable to other debuggers as well.

It is helpful to first create a sample Node.js application before reading about debugging. You can follow the 
Node.js walkthrough to install Node.js and create a simple "Hello World" JavaScript application (app.js). 
Once you have a simple application all set up, this page will take you through VS Code debugging features.

## Debug view

To bring up the Debug view, click on the Debug icon in the Activity Bar on the side of VS Code. 
You can also use the keyboard shortcut Ctrl+Shift+D.

![Cover](https://code.visualstudio.com/assets/docs/editor/debugging/debugicon.png)
### The Debug view displays all information related to debugging and has a top bar with debugging commands and configuration settings.

## Debug menu

The top level Debug menu has the most common debug commands:

![cover](https://code.visualstudio.com/assets/docs/editor/debugging/debug-menu.png)

## Launch configurations

To debug a simple app in VS Code, press F5 and VS Code will try to debug your currently active file.
However, for most debugging scenarios, creating a launch configuration file is beneficial because it allows you to configure and save debugging setup details. VS Code keeps debugging configuration information in a launch.json file located in a .vscode folder in your workspace (project root folder) or in your user settings or workspace settings.
To create a launch.json file, open your project folder in VS Code (File > Open Folder) and then click on the Configure gear icon on the Debug view top bar.

![cover](https://code.visualstudio.com/assets/docs/editor/debugging/launch-configuration.png)

VS Code will try to automatically detect your debug environment but if this fails, you will have to choose your debug environment manually:

![cover](https://code.visualstudio.com/assets/docs/editor/debugging/debug-environments.png)

Here is the launch configuration generated for Node.js debugging:

``````
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${file}"
        }
    ]
}
``````

If you go back to the File Explorer view (Ctrl+Shift+E), you'll see that VS Code has created a .vscode folder and added the launch.json file to your workspace.

![cover](https://code.visualstudio.com/assets/docs/editor/debugging/launch-json-in-explorer.png)

| Note: You can debug a simple application even if you don't have a folder open in VS Code 
| but it is not possible to manage launch configurations and set up advanced debugging. 
| The VS Code Status Bar is purple if you do not have a folder open.

Note that the attributes available in launch configurations vary from debugger to debugger. You can use IntelliSense suggestions (Ctrl+Space) to find out which attributes exist for a specific debugger. In addition, hover help is available for all attributes.

Do not assume that an attribute that is available for one debugger automatically works for other debuggers too. If you see green squiggles in your launch configuration, hover over them to learn what the problem is and try to fix them before launching a debug session.

![cover](https://code.visualstudio.com/assets/docs/editor/debugging/launch-json-intellisense.png)

VS Code debuggers typically support launching a program in debug mode or attaching to an already running program in debug mode. Depending on the request (attach or launch) different attributes are required and VS Code's launch.json validation and suggestions should help with that.

Review all automatically generated values and make sure that they make sense for your project and debugging environment.

To add a new configuration to an existing launch.json, use one of the following techniques:

*Use IntelliSense if your cursor is located inside the configurations array.*
*Press the Add Configuration button to invoke snippet IntelliSense at the start of the array.*
*Choose Add Configuration... option in the Debug dropdown.*

**subject covered in the course**
-------------

- *HTML*
- *CSS*
- *GitHub*
- *JavaScript*
- *MongoDB*
- *NodeJS*