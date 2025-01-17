/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { FOCUSING_DOC } from '@univerjs/core';
import type { IShortcutItem } from '@univerjs/ui';
import { KeyCode } from '@univerjs/ui';

import { BreakLineCommand } from '../commands/commands/break-line.command';
import { DeleteLeftCommand, DeleteRightCommand } from '../commands/commands/delete.command';

export const BreakLineShortcut: IShortcutItem = {
    id: BreakLineCommand.id,
    preconditions: (contextService) => contextService.getContextValue(FOCUSING_DOC),
    binding: KeyCode.ENTER,
};

export const DeleteLeftShortcut: IShortcutItem = {
    id: DeleteLeftCommand.id,
    preconditions: (contextService) => contextService.getContextValue(FOCUSING_DOC),
    binding: KeyCode.BACKSPACE,
};

export const DeleteRightShortcut: IShortcutItem = {
    id: DeleteRightCommand.id,
    preconditions: (contextService) => contextService.getContextValue(FOCUSING_DOC),
    binding: KeyCode.DELETE,
};
