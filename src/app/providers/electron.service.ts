import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer } from 'electron';
import * as childProcess from 'child_process';
import * as sqlite from 'sqlite3';

@Injectable()
export class ElectronService {

  ipcRenderer: typeof ipcRenderer;
  childProcess: typeof childProcess;
  sqlite3: typeof sqlite;

  constructor() {
    // Conditional imports
    if (this.isElectron()) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.childProcess = window.require('child_process');
      this.sqlite3 = window.require('sqlite3').verbose();
      console.log(this.sqlite3);
      
    }
  }

  isElectron = () => {
    return window && window.process && window.process.type;
  }

}
