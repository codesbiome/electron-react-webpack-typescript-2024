/**
 * Copyright (c) 2021, Guasam
 *
 * This software is provided "as-is", without any express or implied warranty. In no event
 * will the authors be held liable for any damages arising from the use of this software.
 * Read the LICENSE file for more details.
 *
 * @author  : guasam
 * @project : Electron Window
 * @package : Titlebar IPC (Renderer Process)
 */

import { ipcRenderer } from 'electron';

const titlebarContext = {
  exit() {
    ipcRenderer.invoke('window-close');
  },
  undo() {
    ipcRenderer.invoke('web-undo');
  },
  redo() {
    ipcRenderer.invoke('web-redo');
  },
  cut() {
    ipcRenderer.invoke('web-cut');
  },
  copy() {
    ipcRenderer.invoke('web-copy');
  },
  paste() {
    ipcRenderer.invoke('web-paste');
  },
  delete() {
    ipcRenderer.invoke('web-delete');
  },
  select_all() {
    ipcRenderer.invoke('web-select-all');
  },
  reload() {
    ipcRenderer.invoke('web-reload');
  },
  force_reload() {
    ipcRenderer.invoke('web-force-reload');
  },
  toggle_devtools() {
    ipcRenderer.invoke('web-toggle-devtools');
  },
  actual_size() {
    ipcRenderer.invoke('web-actual-size');
  },
  zoom_in() {
    ipcRenderer.invoke('web-zoom-in');
  },
  zoom_out() {
    ipcRenderer.invoke('web-zoom-out');
  },
  toggle_fullscreen() {
    ipcRenderer.invoke('web-toggle-fullscreen');
  },
  minimize() {
    ipcRenderer.invoke('window-minimize');
  },
  toggle_maximize() {
    ipcRenderer.invoke('window-toggle-maximize');
  },
  open_url(url: string) {
    ipcRenderer.invoke('open-url', url);
  },
};

export type TitlebarContextApi = typeof titlebarContext;

export default titlebarContext;
