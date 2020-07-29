from flask import Flask
import requests
from bs4 import BeautifulSoup
from flask import request


app = Flask(__name__)

@app.route('/scrap', methods=['GET'])
def scrapThis():
	urldata = request.args['data']
	page = requests.get(urldata)
	soup = BeautifulSoup(page.content, 'html.parser')

	return {
		'scrapData' : [str(soup)]
	}


@app.route('/test/<name>')
def tesst(name): 
	return{
		'time' : name
	}

@app.route('/instascrape', methods=['GET'])
def instaScrape():
	
	instaUrl = request.args['data']
	page = requests.get(instaUrl)
	soup = BeautifulSoup(page.content, 'html.parser')
	divs = soup.findAll(attrs = {"name" : "description"})
	
	splitstring = str(divs).split(">")
	mainContent = splitstring[0].split()

	followers = mainContent[1][9:]
	posts = mainContent[5]
	following = mainContent[3]
	name = mainContent[14] + " " + mainContent[15]
	handle = mainContent[16]
	handle = handle.replace("(", "")
	handle = handle.replace(")", "")
	handle = handle[:-1]

		
	return {
		'all' : splitstring,
		'posts' : posts,
		'following' : following,
		'followers' : followers,
		'name' : name,
		'handle' : handle
	}

