export const projectApi = {
  checkCreateRequest: 'project:checkCreateRequest',
  checkCreateResult: 'project:checkCreateResult',
  create: 'project:create',
  open: 'project:open',
  close: 'project:close',
  update: 'project:update',
  build: 'project:build',
  buildError: 'project:buildError',
  setServerUpdateChannel: 'project:setServerUpdateChannel',

  getRecents: 'project:getRecents',
  recents: 'project:recents',
  removeRecent: 'project:removeRecent',

  setPathsState: 'project:setPathsState',
  setPathsStatePatch: 'project:setPathsStatePatch',
  pathsState: 'project:pathsState',

  updateResources: 'project:updateResources',
  setResourceConfig: 'project:setResourceConfig',

  fsUpdate: 'project:fsUpdate',
  resourcesUpdate: 'project:resourcesUpdate',

  createDirectory: 'project:createDirectory',
  renameDirectory: 'project:renameDirectory',
  deleteDirectory: 'project:deleteDirectory',
  hardDeleteDirectory: 'project:hardDeleteDirectory',

  freePendingFolderDeletion: 'project:freePendingFolderDeletion',

  createFile: 'project:createFile',
  renameFile: 'project:renameFile',
  deleteFile: 'project:deleteFile',
  hardDeleteFile: 'project:hardDeleteFile',

  moveEntry: 'project:moveEntry',
  copyEntry: 'project:copyEntry',
  copyEntries: 'project:copyEntries',
};

export const assetApi = {
  create: 'asset:create',
  import: 'asset:import',
  rename: 'asset:rename',
  delete: 'asset:delete',
};

export const githubApi = {
  fetchReleases: 'github:fetchReleases',
};

export const stateApi = {
  ackState: 'ackState',
  state: 'state',
  serverDataState: 'serverDataState',
  gameLaunched: 'state:gameLaunched',
  setUserId: 'state:setUserId',
};

export const explorerApi = {
  readDirRecursive: 'explorer:readDirRecursive',
  readDir: 'explorer:readDir',
  readRoots: 'explorer:readRoots',
  readRoot: 'explorer:readRoot',

  dir: 'explorer:dir',
  dirRecursive: 'explorer:dirRecursive',
  roots: 'explorer:roots',
  root: 'explorer:root',
  newDir: 'explorer:newDir',
  createDir: 'explorer:createDir',
};

export const serverApi = {
  ackState: 'server:ackState',
  state: 'server:state',

  start: 'server:start',
  stop: 'server:stop',

  bufferedOutput: 'server:output',
  structuredOutputMessage: 'server:outputStructured',
  clearOutput: 'server:clearOutput',
  sendCommand: 'server:sendCommand',

  ackResourcesState: 'server:ackResourcesState',
  resourcesState: 'server:resourcesState',

  setEnabledResources: 'server:refreshResources',
  restartResource: 'server:restartResource',
  stopResource: 'server:stopResource',
  startResource: 'server:startResource',

  updateChannelsState: 'server:updateChannelsState',
  ackUpdateChannelsState: 'server:ackUpdateChannelsState',
  checkForUpdates: 'server:checkForUpdates',
  installUpdate: 'server:installUpdate',
};

export const statusesApi = {
  ack: 'statuses:ack',
  update: 'statuses:update',
  statuses: 'statuses:statuses',
};

export const notificationsApi = {
  ack: 'notifications:ack',
  create: 'notifications:create',
  delete: 'notifications:delete',
};

export const taskReporterApi = {
  ackTasks: 'taskReporter:ackTasks',
  tasks: 'taskReporter:tasks',
  taskAdded: 'taskReporter:taskAdded',
  taskChanged: 'taskReporter:taskChanged',
  taskDeleted: 'taskReporter:taskDeleted',
};

export const outputApi = {
  ack: 'output:ack',
  output: 'output:output',
  outputLabel: 'output:outputLabel',
  flush: 'output:flush',
};

export const gameApi = {
  ack: 'game:ack',
  gameLaunched: 'game:gameLaunched',
  gameProcessStateChanged: 'game:gameStateChanged',
  connectionStateChanged: 'game:connectionStateChanged',
  start: 'game:start',
  stop: 'game:stop',
  restart: 'game:restart',
};
