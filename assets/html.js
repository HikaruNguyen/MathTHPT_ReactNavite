function getHtml() {
    return "<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <title>Title</title>\n" +
        "    <script type=\"text/javascript\" async\n" +
        "            src=\"https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=MML_CHTML\">\n" +
        "    </script>\n" +
        "</head>\n" +
        "<body>\n" +
        "<div class=\"cauhoi\">\n" +
        "\n" +
        "    <div class=\"cauhoi_text\">\n" +
        "    <div>\n" +
        "Cho hàm số f có đạo hàm là f&#39;(x)=x(x-1)<sup>2</sup>(x+2)<sup>3</sup>&nbsp;với mọi x<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mo>&#8712;</mo><mi mathvariant=\"normal\">&#8477;</mi></math>&nbsp;. Số điểm cực trị của hàm số f là</div>\n" +
        "        Tìm giá trị lớn nhất của hàm số y=f(x) =&nbsp;\n" +
        "        <math xmlns=\"http://www.w3.org/1998/Math/MathML\">\n" +
        "            <msqrt>\n" +
        "                <mn>16</mn>\n" +
        "                <mo>-</mo>\n" +
        "                <msup>\n" +
        "                    <mn>4</mn>\n" +
        "                    <mi>x</mi>\n" +
        "                </msup>\n" +
        "            </msqrt>\n" +
        "        </math>\n" +
        "        &nbsp;trên đoạn [-2;-1]\n" +
        "\n" +
        "    </div>\n" +
        "    <div class=\"cauhoi_anh\">\n" +
        "        <img src='data:image/png;base64,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'/>\n" +
        "    </div>\n" +
        "</div>\n" +
        "<div class=\"dapan\">\n" +
        "    <div id=\"answer_1\">\n" +
        "        <input type=\"radio\" name=\"answer\" value=\"1\">\n" +
        "        <math xmlns=\"http://www.w3.org/1998/Math/MathML\">\n" +
        "            <munder>\n" +
        "                <mrow>\n" +
        "                    <mi>m</mi>\n" +
        "                    <mi>a</mi>\n" +
        "                    <mi>x</mi>\n" +
        "                </mrow>\n" +
        "                <mrow>\n" +
        "                    <mo>[</mo>\n" +
        "                    <mo>-</mo>\n" +
        "                    <mn>2</mn>\n" +
        "                    <mo>,</mo>\n" +
        "                    <mo>-</mo>\n" +
        "                    <mn>1</mn>\n" +
        "                    <mo>]</mo>\n" +
        "                </mrow>\n" +
        "            </munder>\n" +
        "            <mi>f</mi>\n" +
        "            <mo>(</mo>\n" +
        "            <mi>x</mi>\n" +
        "            <mo>)</mo>\n" +
        "            <mo>=</mo>\n" +
        "            <mn>0</mn>\n" +
        "        </math>\n" +
        "    </div>\n" +
        "\n" +
        "    <div id=\"answer_2\">\n" +
        "        <input type=\"radio\" name=\"answer\" value=\"2\">\n" +
        "        <math xmlns=\"http://www.w3.org/1998/Math/MathML\">\n" +
        "            <munder>\n" +
        "                <mrow>\n" +
        "                    <mi>m</mi>\n" +
        "                    <mi>a</mi>\n" +
        "                    <mi>x</mi>\n" +
        "                </mrow>\n" +
        "                <mrow>\n" +
        "                    <mo>[</mo>\n" +
        "                    <mo>-</mo>\n" +
        "                    <mn>2</mn>\n" +
        "                    <mo>,</mo>\n" +
        "                    <mo>-</mo>\n" +
        "                    <mn>1</mn>\n" +
        "                    <mo>]</mo>\n" +
        "                </mrow>\n" +
        "            </munder>\n" +
        "            <mi>f</mi>\n" +
        "            <mo>(</mo>\n" +
        "            <mi>x</mi>\n" +
        "            <mo>)</mo>\n" +
        "            <mo>=</mo>\n" +
        "            <mfrac>\n" +
        "                <mn>4</mn>\n" +
        "                <msqrt>\n" +
        "                    <mn>2</mn>\n" +
        "                </msqrt>\n" +
        "            </mfrac>\n" +
        "        </math>\n" +
        "    </div>\n" +
        "    <div id=\"answer_3\">\n" +
        "        <input type=\"radio\" name=\"answer\" value=\"3\">\n" +
        "        <math xmlns=\"http://www.w3.org/1998/Math/MathML\">\n" +
        "            <munder>\n" +
        "                <mrow>\n" +
        "                    <mi>m</mi>\n" +
        "                    <mi>a</mi>\n" +
        "                    <mi>x</mi>\n" +
        "                </mrow>\n" +
        "                <mrow>\n" +
        "                    <mo>[</mo>\n" +
        "                    <mo>-</mo>\n" +
        "                    <mn>2</mn>\n" +
        "                    <mo>,</mo>\n" +
        "                    <mo>-</mo>\n" +
        "                    <mn>1</mn>\n" +
        "                    <mo>]</mo>\n" +
        "                </mrow>\n" +
        "            </munder>\n" +
        "            <mi>f</mi>\n" +
        "            <mo>(</mo>\n" +
        "            <mi>x</mi>\n" +
        "            <mo>)</mo>\n" +
        "            <mo>=</mo>\n" +
        "            <mn>4</mn>\n" +
        "        </math>\n" +
        "    </div>\n" +
        "    <div id=\"answer_4\">\n" +
        "        <input type=\"radio\" name=\"answer\" value=\"4\">\n" +
        "        <math xmlns=\"http://www.w3.org/1998/Math/MathML\">\n" +
        "            <munder>\n" +
        "                <mrow>\n" +
        "                    <mi>m</mi>\n" +
        "                    <mi>a</mi>\n" +
        "                    <mi>x</mi>\n" +
        "                </mrow>\n" +
        "                <mrow>\n" +
        "                    <mo>[</mo>\n" +
        "                    <mo>-</mo>\n" +
        "                    <mn>2</mn>\n" +
        "                    <mo>,</mo>\n" +
        "                    <mo>-</mo>\n" +
        "                    <mn>1</mn>\n" +
        "                    <mo>]</mo>\n" +
        "                </mrow>\n" +
        "            </munder>\n" +
        "            <mi>f</mi>\n" +
        "            <mo>(</mo>\n" +
        "            <mi>x</mi>\n" +
        "            <mo>)</mo>\n" +
        "            <mo>=</mo>\n" +
        "            <mn>2</mn>\n" +
        "            <msqrt>\n" +
        "                <mn>3</mn>\n" +
        "            </msqrt>\n" +
        "        </math>\n" +
        "    </div>\n" +
        "\n" +
        "\n" +
        "</div>\n" +
        "<button type=\"button\" onclick=\"setColor(checkAnswer(),2)\">Check</button>\n" +
        "<a href=\"javascript:setColor(1,2)\">Check</a>\n" +
        "<script>\n" +
        "    function checkAnswer() {\n" +
        "        var radios = document.getElementsByName('answer');\n" +
        "        var count = -1;\n" +
        "        for (var i = 0, length = radios.length; i < length; i++) {\n" +
        "            if (radios[i].checked) {\n" +
        "                // do whatever you want with the checked radio\n" +
        "                count = i;\n" +
        "//                return (radios[i].value);\n" +
        "            }\n" +
        "        }\n" +
        "        return count;\n" +
        "    }\n" +
        "    function setColor(_select, _true) {\n" +
        "        for (var i = 1; i <= 4; i++) {\n" +
        "            document.getElementById('answer_' + i).style.backgroundColor = 'white';\n" +
        "        }\n" +
        "        _select = parseInt(checkAnswer()) + 1;\n" +
        "        if (_select == _true) {\n" +
        "            document.getElementById('answer_' + _true).style.backgroundColor = '#2ecc71';\n" +
        "        } else {\n" +
        "            if (_select > 0)\n" +
        "                document.getElementById('answer_' + _select).style.backgroundColor = '#e74c3c';\n" +
        "            document.getElementById('answer_' + _true).style.backgroundColor = '#2ecc71';\n" +
        "        }\n" +
        "    }\n" +
        "</script>\n" +
        "<script>\n" +
        "    var rad = document.getElementsByName('answer');\n" +
        "    var prev = null;\n" +
        "    for (var i = 0; i < rad.length; i++) {\n" +
        "        rad[i].onclick = function () {\n" +
        "            (prev) ? console.log(prev.value) : null;\n" +
        "            if (this !== prev) {\n" +
        "                prev = this;\n" +
        "            }\n" +
        "//            console.log(this.value)\n" +
        "            alert(this.value);\n" +
        "        };\n" +
        "    }\n" +
        "</script>\n" +
        "</body>\n" +
        "</html>";
}

const doan1 = "<!DOCTYPE html>\n" +
    "<html lang=\"en\">\n" +
    "<head>\n" +
    "    <meta charset=\"UTF-8\">\n" +
    "    <title>Title</title>\n" +
    "    <script type=\"text/javascript\" async\n" +
    "           src=\"http://mathpt.webstarterz.com/mathjax/2.7-latest/MathJax.js?config=MML_CHTML\">\n" +
    "    </script>\n" +
    "</head>\n" +
    "<body>\n" +
    "<div class=\"cauhoi\">\n" +
    "    <div class=\"cauhoi_text\">";

const question = "";

const doan2 = "</div>\n" +
    "    <div class=\"cauhoi_anh\">";

const doan2_1 = "<img width=\"100%\" src='";
const doan2_2 = "<img src='";

const image = "";

const doan3 = "'/>" +
    "</div>\n" +
    "</div>\n" +
    "<div class=\"dapan\">\n" +
    "    <div id=\"answer_1\">\n" +
    "        <input type=\"radio\" name=\"answer\" value=\"1\">" +
    "<b>A. </b>";


const answer1 = "";

const doan4 = "</div>\n" +
    "\n" +
    "    <div id=\"answer_2\">\n" +
    "        <input type=\"radio\" name=\"answer\" value=\"2\">" +
    "<b>B. </b>";

const answer2 = "";

const doan5 = "</div>\n" +
    "    <div id=\"answer_3\">\n" +
    "        <input type=\"radio\" name=\"answer\" value=\"3\">" +
    "<b>C. </b>";

const answer3 = "";

const doan6 = "</div>\n" +
    "    <div id=\"answer_4\">\n" +
    "        <input type=\"radio\" name=\"answer\" value=\"4\">" +
    "<b>D. </b>";

const answer4 = "";

const doan7 = "</div>\n" +
    "\n" +
    "\n" +
    "</div>\n" +
    "\n" +
    "<script>\n" +
    "    function checkAnswer() {\n" +
    "        var radios = document.getElementsByName('answer');\n" +
    "        var count = -1;\n" +
    "        for (var i = 0, length = radios.length; i < length; i++) {\n" +
    "            if (radios[i].checked) {\n" +
    "                // do whatever you want with the checked radio\n" +
    "                count = i;\n" +
    "//                return (radios[i].value);\n" +
    "            }\n" +
    "        }\n" +
    "        return count;\n" +
    "\n" +
    "    }\n" +
    "\n" +
    "    function setColor(_select, _true) {\n _dung = parseInt(_true);" +
    "        for (var i = 1; i <= 4; i++) {\n" +
    "            document.getElementById('answer_' + i).style.backgroundColor = 'white';\n" +
    "        }\n" +
    "        _select = parseInt(checkAnswer()) + 1;\n" +
    "        if (_select == _true) {\n" +
    "            document.getElementById('answer_' + _dung).style.backgroundColor = '#2ecc71';\n" +
    "        } else {\n if (_select > 0)" +
    "            document.getElementById('answer_' + _select).style.backgroundColor = '#e74c3c';\n" +
    "            document.getElementById('answer_' + _dung).style.backgroundColor = '#2ecc71';\n" +
    "\n" +
    "        }\n" +
    "    }\n" +
    "   function resetColor() {\n" +
    "        for (var i = 1; i <= 4; i++) {\n" +
    "            document.getElementById('answer_' + i).style.backgroundColor = 'white';\n" +
    "        }\n" +
    "    }" +
    "</script>\n" +
    "<script>\n" +
    "    var rad = document.getElementsByName('answer');\n" +
    "    var prev = null;\n" +
    "    for (var i = 0; i < rad.length; i++) {\n" +
    "        rad[i].onclick = function () {\n" +
    "            (prev) ? console.log(prev.value) : null;\n" +
    "            if (this !== prev) {\n" +
    "                prev = this;\n" +
    "            }\n" +
    "//            console.log(this.value)\n" +
    "            Android.storeText(this.value);\n" +
    "        };\n" +
    "    }\n" +
    "</script>\n" +
    "</body>\n" +
    "</html>";

function getMath(question, image, answer1, answer2, answer3, answer4) {
    if (image === null || image.trim()==='' || !image.trim().startsWith("data")) {
        return doan1 + question + doan2 + doan2_2 + image + doan3
            + answer1 + doan4 + answer2 + doan5 + answer3 + doan6 + answer4 + doan7;
    } else {
        return doan1 + question + doan2 + doan2_1 + image + doan3
            + answer1 + doan4 + answer2 + doan5 + answer3 + doan6 + answer4 + doan7;
    }
}

export default getMath;

// export default getHtml();