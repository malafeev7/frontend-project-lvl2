<h2 align="center"> Frontend-project-lvl2 </h2>

<div align="center">

[![Actions Status](https://github.com/malafeev7/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/malafeev7/frontend-project-lvl2/actions)

[![Node.js CI](https://github.com/malafeev7/frontend-project-lvl2/actions/workflows/nodejs.yml/badge.svg)](https://github.com/malafeev7/frontend-project-lvl2/actions/workflows/nodejs.yml)

<a href="https://codeclimate.com/github/malafeev7/frontend-project-lvl2/maintainability"><img src="https://api.codeclimate.com/v1/badges/ca34d93c8891520d1712/maintainability" /></a>

<a href="https://codeclimate.com/github/malafeev7/frontend-project-lvl2/test_coverage"><img src="https://api.codeclimate.com/v1/badges/ca34d93c8891520d1712/test_coverage" /></a>

</div>

<h2> Gendiff is a program that compares two configuration files and shows a difference.</h2>
<p>This project is a console application that allows you to merge two files for changes. Supported file types are Json and Yaml. The format of the result of the changes is displayed on the screen and is available in the Json, Plain Text and Classic Cascading formats.</p>

<h2> Installation Guide : </h2>
		<ul>
		  <li> 
		  	<p>Copy the repository
</p>
		  	</li>
		  	<pre>git clone https://github.com/malafeev7/frontend-project-lvl2.git</<br></pre>
		  <li> <p>Type make install
</p>
		  	</li>
		  	<pre>make install
</pre>
		</ul>

<h2>Example of json files difference:</h2>

<a href="https://asciinema.org/a/08gvclLd4GN9DAf5FF6smIOY0" target="_blank"><img src="https://asciinema.org/a/08gvclLd4GN9DAf5FF6smIOY0.svg" /></a>

<h2>Example of yaml files difference:</h2>

<a href="https://asciinema.org/a/aiyXDNyaB1ShK9OaykeHdYzzM" target="_blank"><img src="https://asciinema.org/a/aiyXDNyaB1ShK9OaykeHdYzzM.svg" /></a>

<h2> Demonstration of the output of the difference in the format - plain text.</h2>
<pre>gendiff -f plain before.json after.json</pre>
		<p align="center">
        <a href="https://asciinema.org/a/pOQ3val1627KI0u1smp5ts3nK" target="_blank"><img src="https://asciinema.org/a/pOQ3val1627KI0u1smp5ts3nK.svg" /></a>
</p>

<h2> Demonstration of the output of the difference in the format - JSON.
</h2>
<pre>gendiff -f json before.json after.json</pre>
		<p align="center">
        <a href="https://asciinema.org/a/idvV1GijZV7u2zON3Ez4Q0Xdo" target="_blank"><img src="https://asciinema.org/a/idvV1GijZV7u2zON3Ez4Q0Xdo.svg" /></a>
        </p>
