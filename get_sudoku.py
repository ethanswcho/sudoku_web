from flask import Flask

app = Flask(__name__)
@app.route("/")
def get_sudoku():
    sudoku = main()
    return sudoku

if __name__ == "__main__":
    app.run()