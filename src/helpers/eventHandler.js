import * as eventListeners from 'src/event-listeners';
import hotkeysManager from 'helpers/hotkeysManager';
import core from 'core';

export default store => {
  const { dispatch } = store;
  const onBeforeDocumentLoaded = eventListeners.onBeforeDocumentLoaded(dispatch);
  const onDisplayModeUpdated = eventListeners.onDisplayModeUpdated(dispatch);
  const onDocumentLoaded = eventListeners.onDocumentLoaded(dispatch);
  const onDocumentUnloaded = eventListeners.onDocumentUnloaded(dispatch);
  const onFitModeUpdated = eventListeners.onFitModeUpdated(dispatch);
  const onRotationUpdated = eventListeners.onRotationUpdated(dispatch);
  const onToolUpdated = eventListeners.onToolUpdated(dispatch);
  const onToolModeUpdated = eventListeners.onToolModeUpdated(dispatch);
  const onZoomUpdated = eventListeners.onZoomUpdated(dispatch);
  const onPageNumberUpdated = eventListeners.onPageNumberUpdated(dispatch);
  const onUpdateAnnotationPermission = eventListeners.onUpdateAnnotationPermission(store);
  const onAnnotationChanged = eventListeners.onAnnotationChanged(dispatch);
  const onStampAnnotationAdded = eventListeners.onStampAnnotationAdded(dispatch);
  const onSignatureAnnotationAdded = eventListeners.onSignatureAnnotationAdded(dispatch);
  const onStickyAnnotationAdded = eventListeners.onStickyAnnotationAdded(store);
  const onFullScreenChange = eventListeners.onFullScreenChange(store);
  const onLayoutChanged = eventListeners.onLayoutChanged(dispatch);
  const onLocationSelected = eventListeners.onLocationSelected(store);
  const onRubberStampAnnotationAdded = eventListeners.onRubberStampAnnotationAdded(dispatch);
  const onPageComplete = eventListeners.onPageComplete(store);
  const onFileAttachmentAnnotationAdded = eventListeners.onFileAttachmentAnnotationAdded(dispatch);
  const onFileAttachmentDataAvailable = eventListeners.onFileAttachmentDataAvailable(dispatch);
  const onDigitalSignatureAvailable = eventListeners.onDigitalSignatureAvailable(dispatch);

  return {
    addEventHandlers: () => {
      core.addEventListener('beforeDocumentLoaded', onBeforeDocumentLoaded);
      core.addEventListener('displayModeUpdated', onDisplayModeUpdated);
      core.addEventListener('documentLoaded', onDocumentLoaded);
      core.addEventListener('documentUnloaded', onDocumentUnloaded);
      core.addEventListener('fitModeUpdated', onFitModeUpdated);
      core.addEventListener('rotationUpdated', onRotationUpdated);
      core.addEventListener('toolUpdated', onToolUpdated);
      core.addEventListener('toolModeUpdated', onToolModeUpdated);
      core.addEventListener('zoomUpdated', onZoomUpdated);
      core.addEventListener('pageNumberUpdated', onPageNumberUpdated);
      core.addEventListener('layoutChanged', onLayoutChanged);
      core.addEventListener('updateAnnotationPermission', onUpdateAnnotationPermission);
      core.addEventListener('annotationChanged', onAnnotationChanged);
      core.addEventListener('pageComplete', onPageComplete);
      core.addEventListener('digitalSignatureAvailable', onDigitalSignatureAvailable);
      core.addEventListener('fileAttachmentDataAvailable', onFileAttachmentDataAvailable);
      core.getTool('AnnotationCreateStamp').on('annotationAdded', onStampAnnotationAdded);
      core.getTool('AnnotationCreateSticky').on('annotationAdded', onStickyAnnotationAdded);
      core.getTool('AnnotationCreateSignature').on('locationSelected', onLocationSelected);
      core.getTool('AnnotationCreateSignature').on('annotationAdded', onSignatureAnnotationAdded);
      core.getTool('AnnotationCreateRubberStamp').on('annotationAdded', onRubberStampAnnotationAdded);
      core.getTool('AnnotationCreateFileAttachment').on('annotationAdded', onFileAttachmentAnnotationAdded);
      hotkeysManager.initialize(store);
      document.addEventListener('fullscreenchange', onFullScreenChange);
      document.addEventListener('mozfullscreenchange', onFullScreenChange);
      document.addEventListener('webkitfullscreenchange', onFullScreenChange);
      document.addEventListener('MSFullscreenChange', onFullScreenChange);
    },
    removeEventHandlers: () => {
      core.removeEventListener('beforeDocumentLoaded', onBeforeDocumentLoaded);
      core.removeEventListener('displayModeUpdated', onDisplayModeUpdated);
      core.removeEventListener('documentLoaded', onDocumentLoaded);
      core.removeEventListener('documentUnloaded', onDocumentUnloaded);
      core.removeEventListener('fitModeUpdated', onFitModeUpdated);
      core.removeEventListener('rotationUpdated', onRotationUpdated);
      core.removeEventListener('toolUpdated', onToolUpdated);
      core.removeEventListener('toolModeUpdated', onToolModeUpdated);
      core.removeEventListener('zoomUpdated', onZoomUpdated);
      core.removeEventListener('pageNumberUpdated', onPageNumberUpdated);
      core.removeEventListener('layoutChanged', onLayoutChanged);
      core.removeEventListener('updateAnnotationPermission', onUpdateAnnotationPermission);
      core.removeEventListener('annotationChanged', onAnnotationChanged);
      core.removeEventListener('pageComplete', onPageComplete);
      core.removeEventListener('digitalSignatureAvailable', onDigitalSignatureAvailable);
      core.removeEventListener('fileAttachmentDataAvailable', onFileAttachmentDataAvailable);
      core.getTool('AnnotationCreateStamp').off('annotationAdded', onStampAnnotationAdded);
      core.getTool('AnnotationCreateSticky').off('annotationAdded', onStickyAnnotationAdded);
      core.getTool('AnnotationCreateSignature').off('locationSelected', onLocationSelected);
      core.getTool('AnnotationCreateRubberStamp').off('annotationAdded', onRubberStampAnnotationAdded);
      core.getTool('AnnotationCreateFileAttachment').off('annotationAdded', onFileAttachmentAnnotationAdded);
      hotkeysManager.off();
      document.removeEventListener('fullscreenchange', onFullScreenChange);
      document.removeEventListener('mozfullscreenchange', onFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', onFullScreenChange);
      document.removeEventListener('MSFullscreenChange', onFullScreenChange);
    },
  };
};