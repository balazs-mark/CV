from flask import Flask
from flask import render_template
from modules.get_json_form_file import get_data_from_json_file

app = Flask(__name__)


@app.route("/")
def under_construction():
    return render_template("under_construction.html")


@app.route("/gov/<language>/")
def cv_for_goverments(language):
    if language == "hu":
        return render_template('gov.html', datas=get_data_from_json_file("user_details_hun.json"))
    if language == "en":
    #     return render_template('gov.html', datas=get_data_from_json_file("user_details_eng.json"))
        return render_template("under_construction.html")
    else:
        return render_template('page_not_found.html'), 404


@app.errorhandler(404)
def page_not_found(error):
    return render_template('page_not_found.html'), 404


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
