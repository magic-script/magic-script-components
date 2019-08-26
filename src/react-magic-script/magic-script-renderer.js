// Copyright (c) 2019 Magic Leap, Inc. All Rights Reserved

import Reconciler from 'react-reconciler';
import mxs from '../../index.js';

// Flow type definitions ------------------------------------------------------
//  Type = string;
//  Props = Object;
//  Container = number;
//  Instance = {
//     _children: Array<Instance | number>,
//    _nativeTag: number,
//    viewConfig: ReactNativeBaseComponentViewConfig<>,
//  };
//  TextInstance = number;
//  HydratableInstance = Instance | TextInstance;
//  PublicInstance = Instance;
//  HostContext = $ReadOnly<{| isInAParentText: boolean,|}>;
//  TimeoutHandle = TimeoutID;
//  NoTimeout = -1;


const NO_CONTEXT = {};
const UPDATE_SIGNAL = {};

// Host Config Interface ------------------------------------------------------

// Function: createInstance
// Description: This is where react-reconciler wants to create an instance of UI element in terms of the target.
// Returns: Instance
// Input parameters:
//  type: string,
//  props: Props,
//  rootContainerInstance: Container,
//  hostContext: HostContext,
//  internalInstanceHandle: Object
function createInstance(type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
  console.log(`createInstance ${type}`);
  console.log(props);
  console.log(rootContainerInstance);
  console.log(hostContext);
  console.log(internalInstanceHandle);

  return mxs._nativeFactory.createElement(type, rootContainerInstance, props);
}

// Function: This function is used to create separate text nodes if the target allows only creating text in separate text nodes
// Description:
// Returns: TextInstance
// Input parameters:
//  text: string,
//  rootContainerInstance: Container,
//  hostContext: HostContext,
//  internalInstanceHandle: Object
function createTextInstance(text, rootContainerInstance, hostContext, internalInstanceHandle) {
  console.log(`createTextInstance ${text}`);
  return text;
}

// Function: appendInitialChild
// Description: This function gets called for initial UI tree creation
// Returns: void
// Input paramters:
//  parentInstance: Instance,
//  child: Instance | TextInstance
function appendInitialChild(parentInstance, child) {
  console.log('appendInitialChild');
  console.log(parentInstance);
  console.log(child);

  mxs._nativeFactory.addChildElement(parentInstance, child);
}

// Function: finalizeInitialChildren
// Description:
// Returns: boolean
// Input parameters:
//  parentInstance: Instance,
//  type: string,
//  props: Props,
//  rootContainerInstance: Container,
//  hostContext: HostContext
function finalizeInitialChildren(parentInstance, type, props, rootContainerInstance, hostContext) {
  console.log('finalizeInitialChildren');
  return false;
}

// Function: getRootHostContext
// Description:
// Returns: HostContext
// Input parameters:
//  rootContainerInstance: Container
function getRootHostContext(rootContainerInstance) {
  console.log('getRootHostContext');

  // React-360
  // return {};

  // react-native-renderer
  return {isInAParentText: false};
}

// Function: getChildHostContext
// Description:
// Returns: HostContext
// Input parameters:
//  parentHostContext: HostContext,
//  type: string,
//  rootContainerInstance: Container
function getChildHostContext(parentHostContext, type, rootContainerInstance) {
  console.log('getChildHostContext');
  // React-360
  // return {};

  const isInAParentText = type === 'RCTText' ||  type === 'RCTVirtualText';
  return (isInAParentText !== parentHostContext.isInAParentText)
    ? { isInAParentText }
    : parentHostContext;
}

// Function: getPublicInstance
// Description:
// Returns: Instance
// Input parameters:
//  instance: Instance
function getPublicInstance(instance) {
  console.log('getPublicInstance');
  return instance;
}

// Function: prepareForCommit
// Description:
// Returns: void
// Input parameters:
//  containerInfo: Container
function prepareForCommit(containerInfo) {
  console.log('prepareForCommit');
}

// Function: resetAfterCommit
// Description:
// Returns: void
// Input parameters:
//  containerInfo: Container
function resetAfterCommit(containerInfo) {
  console.log('resetAfterCommit');
}

// Function: prepareUpdate
// Description: This is where we would want to diff between oldProps and newProps and decide whether to update or not
// Returns: null | Object
// Input parameters:
//  instance: Instance,
//  type: string,
//  oldProps: Props,
//  newProps: Props,
//  rootContainerInstance: Container,
//  hostContext: HostContext
function prepareUpdate(instance, type, oldProps, newProps, rootContainerInstance, hostContext) {
  console.log('prepareUpdate');
  return true;
}

// Function: shouldDeprioritizeSubtree
// Description:
// Returns: boolean
// Input parameters:
//  type: string,
//  props: Props
function shouldDeprioritizeSubtree(type, props) {
  logNotImplemented('shouldDeprioritizeSubtree');
  // return false
}

// Function: shouldSetTextContent
// Description:
// Returns: boolean
// Input parameters:
//  type: string,
//  props: Props
function shouldSetTextContent(type, props) {
  // Brian Vaughn:
  //  Always returning false simplifies the createInstance() implementation,
  //  But creates an additional child Fiber for raw text children.
  //  No additional native views are created though.
  console.log('shouldSetTextContent');
  console.log(type);
  console.log(props);

  return false;
}

// Function: appendChild
// Description:
// Returns: void
// Input parameters:
//  parentInstance: Instance,
//  child: Instance | TextInstance
function appendChild(parentInstance, child) {
  console.log('appendChild');
  console.log(parentInstance);
  console.log(child);

  mxs._nativeFactory.addChildElement(parentInstance, child);
}

// Function: appendChildToContainer
// Description:
// Returns: void
// Input parameters:
//  parentInstance: Instance,
//  child: Instance | TextInstance
function appendChildToContainer(container, child) {
  console.log('appendChildToContainer');
  console.log(container);
  console.log(child);

  mxs._nativeFactory.appendChildToContainer(container, child);
}

// Function: commitTextUpdate
// Description:
// Returns: void
// Input parameters:
//  textInstance: TextInstance,
//  oldText: string,
//  newText: string
function commitTextUpdate(textInstance, oldText, newText) {
  logNotImplemented('commitTextUpdate');
  console.log(textInstance);
  console.log(oldText);
  console.log(newText);
}

// Function: commitMount
// Description:
// Returns: void
// Input parameters:
//  instance: Instance,
//  type: string,
//  newProps: Props,
//  internalInstanceHandle: Object
function commitMount(instance, type, newProps, internalInstanceHandle) {
  logNotImplemented('commitMount');
}

// Function: commitUpdate
// Description:
// Returns: void
// Input parameters:
//  instance: Instance,
//  updatePayload: Object,
//  type: string,
//  oldProps: Props,
//  newProps: Props,
//  internalInstanceHandle: Object
function commitUpdate(instance, updatePayload, type, oldProps, newProps, internalInstanceHandle) {
  // logNotImplemented('commitUpdate');
  console.log('commitUpdate');
  console.log(instance);
  console.log(type);
  console.log(updatePayload);
  console.log(oldProps);
  console.log(newProps);

  mxs._nativeFactory.updateElement(type, instance, oldProps, newProps);
}

// Function: insertBefore
// Description:
// Returns: void
// Input parameters:
//  parentInstance: Instance,
//  child: Instance | TextInstance,
//  beforeChild: Instance | TextInstance
function insertBefore(parentInstance, child, beforeChild) {
  if (typeof child === 'string') {
    parentInstance.setText(child);
  } else if (typeof child === 'number') {
    parentInstance.setText(child.toString());
  } else {
    parentInstance.addChild(child);
  }
}

// Function: insertInContainerBefore
// Description:
// Returns: void
// Input parameters:
//  parentInstance: Container,
//  child: Instance | TextInstance,
//  beforeChild: Instance | TextInstance
function insertInContainerBefore(container, child, beforeChild) {
  logNotImplemented('insertInContainerBefore');
}

// Function: removeChild
// Description:
// Returns: void
// Input parameters:
//  parentInstance: Instance,
//  child: Instance | TextInstance
function removeChild(parentInstance, child) {
  console.log('removeChild');

  mxs._nativeFactory.removeChildElement(parentInstance, child);
}

// Function: removeChildFromContainer
// Description:
// Returns: void
// Input parameters:
//  parentInstance: Container,
//  child: Instance | TextInstance
function removeChildFromContainer(parentInstance, child) {
  console.log(parentInstance);
  console.log(child);
  mxs._nativeFactory.removeChildFromContainer(parentInstance, child);
}

// Function: resetTextContent
// Description:
// Returns: void
// Input parameters:
//  instance: Instance
function resetTextContent(instance) {
  logNotImplemented('resetTextContent');
}

// Function: hideInstance
// Description:
// Returns: void
// Input parameters:
//  instance: Instance
function hideInstance(instance) {
  logNotImplemented('hideInstance');
}

// Function: hideTextInstance
// Description:
// Returns: void
// Input parameters:
//  textInstance: TextInstance
function hideTextInstance(textInstance) {
  logNotImplemented('hideTextInstance');
}

// Function: unhideInstance
// Description:
// Returns: void
// Input parameters:
//  instance: Instance,
//  props: Props
function unhideInstance(instance, props) {
  logNotImplemented('unhideInstance');
}

// Function: unhideTextInstance
// Description:
// Returns: void
// Input parameters:
//  textInstance: TextInstance,
//  text: string
function unhideTextInstance(textInstance, text) {
  logNotImplemented('unhideTextInstance');
}


const HostConfig = {
  now: Date.now,

  createInstance: createInstance,
  createTextInstance: createTextInstance,

  appendInitialChild: appendInitialChild,
  finalizeInitialChildren: finalizeInitialChildren,

  getPublicInstance: getPublicInstance,
  getRootHostContext: getRootHostContext,
  getChildHostContext: getChildHostContext,

  prepareForCommit: prepareForCommit,
  resetAfterCommit: resetAfterCommit,

  prepareUpdate: prepareUpdate,

  shouldDeprioritizeSubtree: shouldDeprioritizeSubtree,
  shouldSetTextContent: shouldSetTextContent,

  isPrimaryRenderer: true,
  noTimeout: -1,
  scheduleTimeout: throwNotImplemented('scheduleTimeout'),
  cancelTimeout: throwNotImplemented('cancelTimeout'),

  supportsMutation: true,
  supportsPersistence: false,
  supportsHydration: false,


  // Mutation -----------------------------------------------------------------

  appendChild: appendChild,
  appendChildToContainer: appendChildToContainer,
  commitTextUpdate: commitTextUpdate,
  commitMount: commitMount,
  commitUpdate: commitUpdate,
  insertBefore: insertBefore,
  insertInContainerBefore: insertInContainerBefore,
  removeChild: removeChild,
  removeChildFromContainer: removeChildFromContainer,
  resetTextContent: resetTextContent,
  hideInstance: hideInstance,
  hideTextInstance: hideTextInstance,
  unhideInstance: unhideInstance,
  unhideTextInstance: unhideTextInstance,


  // Persistence --------------------------------------------------------------

  cloneInstance: throwNotImplemented('cloneInstance'),
  createContainerChildSet: throwNotImplemented('createContainerChildSet'),
  appendChildToContainerChildSet: throwNotImplemented('appendChildToContainerChildSet'),
  finalizeContainerChildren: throwNotImplemented('finalizeContainerChildren'),
  replaceContainerChildren: throwNotImplemented('replaceContainerChildren'),
  cloneHiddenInstance: throwNotImplemented('cloneHiddenInstance'),
  cloneUnhiddenInstance: throwNotImplemented('cloneUnhiddenInstance'),
  createHiddenTextInstance: throwNotImplemented('createHiddenTextInstance'),


  // Hydration ----------------------------------------------------------------

  canHydrateInstance: throwNotImplemented('canHydrateInstance'),
  canHydrateTextInstance: throwNotImplemented('canHydrateTextInstance'),
  canHydrateSuspenseInstance: throwNotImplemented('canHydrateSuspenseInstance'),
  isSuspenseInstancePending: throwNotImplemented('isSuspenseInstancePending'),
  isSuspenseInstanceFallback: throwNotImplemented('isSuspenseInstanceFallback'),
  registerSuspenseInstanceRetry: throwNotImplemented('registerSuspenseInstanceRetry'),
  getNextHydratableSibling: throwNotImplemented('getNextHydratableSibling'),
  getFirstHydratableChild: throwNotImplemented('getFirstHydratableChild'),
  hydrateInstance: throwNotImplemented('hydrateInstance'),
  hydrateTextInstance: throwNotImplemented('hydrateTextInstance'),
  getNextHydratableInstanceAfterSuspenseInstance: throwNotImplemented('getNextHydratableInstanceAfterSuspenseInstance'),
  clearSuspenseBoundary: throwNotImplemented('clearSuspenseBoundary'),
  clearSuspenseBoundaryFromContainer: throwNotImplemented('clearSuspenseBoundaryFromContainer'),
  didNotMatchHydratedContainerTextInstance: throwNotImplemented('didNotMatchHydratedContainerTextInstance'),
  didNotMatchHydratedTextInstance: throwNotImplemented('didNotMatchHydratedTextInstance'),
  didNotHydrateContainerInstance: throwNotImplemented('didNotHydrateContainerInstance'),
  didNotHydrateInstance: throwNotImplemented('didNotHydrateInstance'),
  didNotFindHydratableContainerInstance: throwNotImplemented('didNotFindHydratableContainerInstance'),
  didNotFindHydratableContainerTextInstance: throwNotImplemented('didNotFindHydratableContainerTextInstance'),
  didNotFindHydratableContainerSuspenseInstance: throwNotImplemented('didNotFindHydratableContainerSuspenseInstance'),
  didNotFindHydratableInstance: throwNotImplemented('didNotFindHydratableInstance'),
  didNotFindHydratableTextInstance: throwNotImplemented('didNotFindHydratableTextInstance'),
  didNotFindHydratableSuspenseInstance: throwNotImplemented('didNotFindHydratableSuspenseInstance')
};

function logNotImplemented(functionName) {
  const message = `${functionName} has not been implemented yet`;

  console.log(message);
  print(message);
}

function throwNotImplemented(functionName) {
  return () => {
    throw new Error(`${functionName} has not been implemented yet`);
  };
}

const MagicScriptRenderer = Reconciler(HostConfig);
export default MagicScriptRenderer;