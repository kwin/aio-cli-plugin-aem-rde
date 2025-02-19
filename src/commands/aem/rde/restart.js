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
'use strict';

const { BaseCommand, cli } = require('../../../lib/base-command');
const spinner = require('ora')();

class RestartCommand extends BaseCommand {
  async run() {
    try {
      cli.log(`Restart cm-p${this._programId}-e${this._environmentId}`);
      spinner.start('restarting environment');
      await this.withCloudSdk((cloudSdkAPI) => cloudSdkAPI.restartEnv());
      spinner.stop();
      cli.log(`Environment restarted.`);
    } catch (err) {
      spinner.stop();
      cli.log(err);
    }
  }
}

Object.assign(RestartCommand, {
  description: 'Restart the author and publish of an RDE',
  args: [],
  aliases: [],
});

module.exports = RestartCommand;
