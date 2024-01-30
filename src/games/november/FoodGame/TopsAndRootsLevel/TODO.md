https://github.com/atlassian/react-beautiful-dnd/issues/2507

In my case, it was due to passing 'index' to the draggable components that were changing with re-rendering.
So, pass index that constantly represent the same component even after the rendering.

I WAS GETTING THESE TWO ERRORS-

[React beautiful DND: Detected non-consecutive indexes]
Invariant failed: Cannot finish a drop animating when no drop is occurring
I fixed the 1st one and the other one got fixed too.

Uncaught runtime errors:
×
ERROR
Invariant failed: Cannot finish a drop animating when no drop is occurring
    at handleError (http://localhost:3001/static/js/bundle.js:179572:58)
    at http://localhost:3001/static/js/bundle.js:179591:7
    at Object.invokeGuardedCallbackDev (http://localhost:3001/static/js/bundle.js:117181:20)
    at invokeGuardedCallback (http://localhost:3001/static/js/bundle.js:117238:35)
    at invokeGuardedCallbackAndCatchFirstError (http://localhost:3001/static/js/bundle.js:117252:29)
    at executeDispatch (http://localhost:3001/static/js/bundle.js:121396:7)
    at processDispatchQueueItemsInOrder (http://localhost:3001/static/js/bundle.js:121422:11)
    at processDispatchQueue (http://localhost:3001/static/js/bundle.js:121433:9)
    at dispatchEventsForPlugins (http://localhost:3001/static/js/bundle.js:121442:7)
    at http://localhost:3001/static/js/bundle.js:121602:16
ERROR
Invariant failed: Cannot finish a drop animating when no drop is occurring
    at handleError (http://localhost:3001/static/js/bundle.js:179572:58)
    at http://localhost:3001/static/js/bundle.js:179591:7