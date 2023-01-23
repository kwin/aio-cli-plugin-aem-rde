/*
 * Copyright 2022 Adobe Inc. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const DeleteCommand = require('./commands/aem/rde/delete')
const HistoryCommand = require('./commands/aem/rde/history')
const InstallCommand = require('./commands/aem/rde/install')
const StatusCommand = require('./commands/aem/rde/status')
const RestartCommand = require('./commands/aem/rde/restart')
const ResetCommand = require('./commands/aem/rde/reset')

module.exports = {
  'delete': new DeleteCommand().run,
  'history': new HistoryCommand().run,
  'install': new InstallCommand().run,
  'status': new StatusCommand().run,
  'restart': new RestartCommand().run,
  'reset': new ResetCommand().run
}
