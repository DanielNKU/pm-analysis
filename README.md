# Security Analysis of Master-Password-Protected Password Management Protocols

This repository contains data for the paper `Security Analysis of Master-Password-Protected Password Management Protocols.` Information on password managers is sourced from documentation, data logs, and application codes, neatly organized into three dedicated folders.

## Documentation

In the `Documentation Sources` folder, you'll find records of URLs from official websites in `Official Websites.txt` and expert blogs in `Expert Blogs.txt`. The collected information from these URLs is succinctly summarized in `summary.md`. If the password manager provides a whitepaper or other documentation materials, we'll ensure to record them in the respective folder.


## Data Logs

In the `Data Sources` folder, we document the information obtained from network traffic in `Network Traffic.md` and local storage in the `Local Data Storage Files` directory.

During the collection of data logs, we conduct the following *PM operations* to record the changes in data logs.

> 1. Logging in
> 2. Opening the vault
> 3. Adding credentials
> 4. Changing credentials
> 5. Deleting credentials
> 6. Logging out

We utilize Burp Suite to intercept and collect network traffic between the client and password manager, capturing data packets before they are encrypted by TLS. In cases where password managers do not utilize network connections, we do not record any information. 

Additionally, we search for local data files on various platforms. If we do not find any data files, we will not record information about data files.


## Application codes

In the `Application Sources` folder, we record and verify information through static analysis in `Static Analysis.md` and dynamic analysis in `Dynamic Analysis.md`.

We utilize terms such as "AES," "AES256," "PBKDF2," "Argon2," "encrypt," "master," etc., to identify the positions of cryptographic algorithms. Upon discovering potential functions, we set breakpoints in the Chrome developer tool for further analysis.

Following that, we execute the aforementioned *PM operations* and document the breakpoints. When the functions pause at these breakpoints, we record the parameters of essential variables for analysis.
