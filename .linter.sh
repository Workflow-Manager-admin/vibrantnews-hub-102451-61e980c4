#!/bin/bash
cd /home/kavia/workspace/code-generation/vibrantnews-hub-102451-61e980c4/vibrantnews_hub_ui
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

