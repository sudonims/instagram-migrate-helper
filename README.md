# Instagram Account Migration Helper

# Usage

1. Change the username and password in migrate.py (line 20 and 22 respectively)
2. Change username in id.js (Line 3)
3. Make sure to install given dependencies (Check first 4 lines in migrate.py)
4. Download Selenium for chrome browser. (Still work left)
5. Run n Get the following list in following.json given as sample.

```JSON
{
	"following": [
		{
			"id": "10 Digit Numeric Data (Unique ID)",
			"username": "Username for the account"
		}
	]
}

```

# To Do

1. Get Follower list (Don;t get the point though)
2. Have user give input to username and password on the go
3. Let the following list be utilised and follow people from new account (Might need cron Job as insta probably limits 15-20 follow req per hour)
4. Setup Selenium On the Go (Download selenium binary on the spot based on user input(choosing browser) )
5. Exception handling.
