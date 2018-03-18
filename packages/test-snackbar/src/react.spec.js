import { runSnapshots } from "../../../scripts/tests/react-snapshots";
import reactTests from "./tests-react.js";
import { renderer, keys, Snackbar, SnackbarInstance } from "polythene-react";
import specTests from "./spec-tests.js";

runSnapshots({
  tests: specTests({ renderer, keys, Snackbar, SnackbarInstance }).concat(reactTests),
  renderer
});
