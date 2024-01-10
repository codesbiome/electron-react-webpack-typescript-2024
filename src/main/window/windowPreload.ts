import { contextBridge } from 'electron';
import titlebarContext from './titlebarContext';

contextBridge.exposeInMainWorld('electron_window', {
  titlebar: titlebarContext,
});
