import * as action_types from '../actions/action_types';
export function getLuckyDrawer(date) {
    return dispatch => {
        dispatch(loadingDataFromWeb());
        fetch(`http://ketqua.net/xo-so-truyen-thong.php?ngay=${date}`, {
            method: 'GET',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Content-Type': 'text/html; charset=UTF-8',
            }
        })
            .then((response) => response.text())
            .then((responseText) => {
                try {
                    var startIndex = responseText.indexOf('<table class="table table-condensed kqcenter kqvertimarginw table-kq-border table-kq-hover table-kq-north-west table-bordered kqbackground table-kq-bold-border" id="result_tab_mb" style="text-align:center;">');
                    var endIndex = responseText.indexOf('</table>', startIndex) + 8;
                    var tableText = responseText.substring(startIndex, endIndex);

                    var DomParser = require('react-native-html-parser').DOMParser;
                    var doc = new DomParser().parseFromString(tableText, 'text/html');
                    var tds = doc.getElementsByTagName('td');

                    var length = tds.length;
                    var prizesArray = [];
                    var temp, i;

                    for (i = 0; i < length; i++) {
                        temp = tds[i].textContent;

                        if (!isNaN(temp) && temp) {
                            prizesArray.push(temp);
                        }
                    }

                    let prizesJson = {
                        special: prizesArray.slice(0, 1),
                        first: prizesArray.slice(1, 2),
                        second: prizesArray.slice(2, 4),
                        third: prizesArray.slice(4, 10),
                        fourth: prizesArray.slice(10, 14),
                        fifth: prizesArray.slice(14, 20),
                        sixth: prizesArray.slice(20, 23),
                        seventh: prizesArray.slice(23, 27)
                    };
                    dispatch(getDataFromWeb(prizesJson));
                }
                catch (e) {
                    //if error set default value
                    let prizesJson = {
                        special: ["89370"],
                        first: ["73044"],
                        second: ["91392", "91392"],
                        third: ["06858", "03361", "47744", "93298", "42624", "39990"],
                        fourth: ["4773", "8133", "5864", "2201"],
                        fifth: ["5540", "2870", "5563", "9150", "8172", "5631"],
                        sixth: ["069", "936", "829"],
                        seventh: ["26", "99", "13", "36"]
                    };
                    dispatch(getDataFromWeb(prizesJson));
                }

            })
            .catch((error) => {
                //if error set default value
                    let prizesJson = {
                        special: ["89370"],
                        first: ["73044"],
                        second: ["91392", "91392"],
                        third: ["06858", "03361", "47744", "93298", "42624", "39990"],
                        fourth: ["4773", "8133", "5864", "2201"],
                        fifth: ["5540", "2870", "5563", "9150", "8172", "5631"],
                        sixth: ["069", "936", "829"],
                        seventh: ["26", "99", "13", "36"]
                    };
                    dispatch(getDataFromWeb(prizesJson));
            });
    }
}
export function getDataFromWeb(prizesJson) {
    return {
        type: action_types.GETLUCKYDRAWER,
        prizesJson: prizesJson,
        isLoading: false
    };
}
export function loadingDataFromWeb() {
    return {
        type: action_types.LOADINGLUCKYDRAWER,
        isLoading: true
    };
}