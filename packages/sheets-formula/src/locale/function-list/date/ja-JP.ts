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

export default {
    DATE: {
        description: `指定された日付に対応するシリアル値を返します。`,
        abstract: `指定された日付に対応するシリアル値を返します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/date-%E9%96%A2%E6%95%B0-e36c0c8c-4104-49da-ab83-82328b832349',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    DATEDIF: {
        description: `2 つの日付間の日数、月数、年数を計算します。 この関数は、年齢を計算する数式に使うと便利です。`,
        abstract: `2 つの日付間の日数、月数、年数を計算します。 この関数は、年齢を計算する数式に使うと便利です。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/datedif-%E9%96%A2%E6%95%B0-25dba1a4-2812-480b-84dd-8b32a451b35c',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    DATEVALUE: {
        description: `日付を表す文字列をシリアル値に変換します。`,
        abstract: `日付を表す文字列をシリアル値に変換します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/datevalue-%E9%96%A2%E6%95%B0-df8b07d4-7761-4a93-bc33-b7471bbff252',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    DAY: {
        description: `シリアル値を日付に変換します。`,
        abstract: `シリアル値を日付に変換します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/day-%E9%96%A2%E6%95%B0-8a7d1cbb-6c7d-4ba1-8aea-25c134d03101',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    DAYS: {
        description: `2 つの日付間の日数を返します。`,
        abstract: `2 つの日付間の日数を返します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/days-%E9%96%A2%E6%95%B0-57740535-d549-4395-8728-0f07bff0b9df',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    DAYS360: {
        description: `1 年を 360 日 (30 日 x 12) として、支払いの計算などに使用される 2 つの日付の間の日数を返します。`,
        abstract: `1 年を 360 日 (30 日 x 12) として、支払いの計算などに使用される 2 つの日付の間の日数を返します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/days360-%E9%96%A2%E6%95%B0-b9a509fd-49ef-407e-94df-0cbda5718c2a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    EDATE: {
        description: `開始日から起算して、指定した月数だけ前または後の日付に対応するシリアル値を返します。`,
        abstract: `開始日から起算して、指定した月数だけ前または後の日付に対応するシリアル値を返します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/edate-%E9%96%A2%E6%95%B0-3c920eb2-6e66-44e7-a1f5-753ae47ee4f5',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    EOMONTH: {
        description: `開始日から起算して、指定した月数だけ前または後の月の最終日に対応するシリアル値を返します。`,
        abstract: `開始日から起算して、指定した月数だけ前または後の月の最終日に対応するシリアル値を返します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/eomonth-%E9%96%A2%E6%95%B0-7314ffa1-2bc9-4005-9d66-f49db127d628',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    HOUR: {
        description: `シリアル値を時刻に変換します。`,
        abstract: `シリアル値を時刻に変換します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/hour-%E9%96%A2%E6%95%B0-a3afa879-86cb-4339-b1b5-2dd2d7310ac7',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    ISOWEEKNUM: {
        description: `指定された日付のその年における ISO 週番号を返します。`,
        abstract: `指定された日付のその年における ISO 週番号を返します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/isoweeknum-%E9%96%A2%E6%95%B0-1c2d0afe-d25b-4ab1-8894-8d0520e90e0e',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    MINUTE: {
        description: `シリアル値を時刻の分に変換します。`,
        abstract: `シリアル値を時刻の分に変換します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/minute-%E9%96%A2%E6%95%B0-af728df0-05c4-4b07-9eed-a84801a60589',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    MONTH: {
        description: `シリアル値を月に変換します。`,
        abstract: `シリアル値を月に変換します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/month-%E9%96%A2%E6%95%B0-579a2881-199b-48b2-ab90-ddba0eba86e8',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    NETWORKDAYS: {
        description: `開始日と終了日を指定して、その期間内の稼動日の日数を返します。`,
        abstract: `開始日と終了日を指定して、その期間内の稼動日の日数を返します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/networkdays-%E9%96%A2%E6%95%B0-48e717bf-a7a3-495f-969e-5005e3eb18e7',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    NETWORKDAYS_INTL: {
        description: `週末がどの曜日で何日間あるかを示すパラメーターを使用して、開始日と終了日の間にある稼働日の日数を返します。`,
        abstract: `週末がどの曜日で何日間あるかを示すパラメーターを使用して、開始日と終了日の間にある稼働日の日数を返します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/networkdays-intl-%E9%96%A2%E6%95%B0-a9b26239-4f20-46a1-9ab8-4e925bfd5e28',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    NOW: {
        description: `現在の日付と時刻に対応するシリアル値を返します。`,
        abstract: `現在の日付と時刻に対応するシリアル値を返します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/now-%E9%96%A2%E6%95%B0-3337fd29-145a-4347-b2e6-20c904739c46',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    SECOND: {
        description: `シリアル値を時刻の秒に変換します。`,
        abstract: `シリアル値を時刻の秒に変換します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/second-%E9%96%A2%E6%95%B0-740d1cfc-553c-4099-b668-80eaa24e8af1',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    TIME: {
        description: `指定した時刻に対応するシリアル値を返します。`,
        abstract: `指定した時刻に対応するシリアル値を返します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/time-%E9%96%A2%E6%95%B0-9a5aff99-8f7d-4611-845e-747d0b8d5457',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    TIMEVALUE: {
        description: `時刻を表す文字列をシリアル値に変換します。`,
        abstract: `時刻を表す文字列をシリアル値に変換します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/timevalue-%E9%96%A2%E6%95%B0-0b615c12-33d8-4431-bf3d-f3eb6d186645',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    TODAY: {
        description: `現在の日付に対応するシリアル値を返します。`,
        abstract: `現在の日付に対応するシリアル値を返します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/today-%E9%96%A2%E6%95%B0-5eb3078d-a82c-4736-8930-2f51a028fdd9',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    WEEKDAY: {
        description: `シリアル値を曜日に変換します。`,
        abstract: `シリアル値を曜日に変換します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/weekday-%E9%96%A2%E6%95%B0-60e44483-2ed1-439f-8bd0-e404c190949a',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    WEEKNUM: {
        description: `シリアル値をその年の何週目に当たるかを示す値に変換します。`,
        abstract: `シリアル値をその年の何週目に当たるかを示す値に変換します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/weeknum-%E9%96%A2%E6%95%B0-e5c43a03-b4ab-426c-b411-b18c13c75340',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    WORKDAY: {
        description: `開始日から起算して、指定した稼動日数だけ前または後の日付に対応するシリアル値を返します。`,
        abstract: `開始日から起算して、指定した稼動日数だけ前または後の日付に対応するシリアル値を返します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/workday-%E9%96%A2%E6%95%B0-f764a5b7-05fc-4494-9486-60d494efbf33',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    WORKDAY_INTL: {
        description: `週末がどの曜日で何日間あるかを示すパラメーターを使用して、開始日から起算して指定した稼働日数だけ前または後の日付に対応するシリアル値を返します。`,
        abstract: `週末がどの曜日で何日間あるかを示すパラメーターを使用して、開始日から起算して指定した稼働日数だけ前または後の日付に対応するシリアル値を返します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/workday-intl-%E9%96%A2%E6%95%B0-a378391c-9ba7-4678-8a39-39611a9bf81d',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    YEAR: {
        description: `シリアル値を年に変換します。`,
        abstract: `シリアル値を年に変換します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/year-%E9%96%A2%E6%95%B0-c64f017a-1354-490d-981f-578e8ec8d3b9',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
    YEARFRAC: {
        description: `開始日と終了日を指定して、その間の期間が 1 年間に対して占める割合を返します。`,
        abstract: `開始日と終了日を指定して、その間の期間が 1 年間に対して占める割合を返します。`,
        links: [
            {
                title: '指導',
                url: 'https://support.microsoft.com/ja-jp/office/yearfrac-%E9%96%A2%E6%95%B0-3844141e-c76d-4143-82b6-208454ddc6a8',
            },
        ],
        functionParameter: {
            number1: { name: 'number1', detail: 'first' },
            number2: { name: 'number2', detail: 'second' },
        },
    },
};
