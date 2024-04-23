tox env: "list py37"
testenv:
"deps: .setenv COVERAGE_FILE  test-reports/{envname}
/.coverage:
"PYTEST_ADDOPTS"
--junitxml
"test-reports/{envname}
/junit.xml -vv
CONFIG_LOCATION 
./consoleme-deploy/root/etc
/consoleme/config/test.yaml
commands 
coverage 
run --source consoleme --parallel-mode
-m pytest {posargs}  coverage
combine coverage report
-m   coverage html
-d test-reports/{envname}/coverage-html
coverage 
xml -o test-reports/{envname}
/coverage.xml 
test
env linterbasepython3_install 
true
deps
test
env flake8
deps 
test
env 
readme]deps}
    {[test
    env
    bandit]deps}
commands 
    {[testenv
      flake8
        readme
      bandit
flake8
I100,I201,I202,D102,D100,C901,D103,D205
python3
install 
true
deps 
    flake8
    flake8-docstrings> 2.7
    flake8-import-order> 9
commands 
 flake8 consoleme 
 setup.py test

readme python3
deps 
    readme_renderer
commands 
    python setup.py 
    check
    -r 
     -s
bandit python3 install  true
deps   bandit
commands 
    bandit
    --ini tox.ini
    -r consoleme
/tests bandit  B104/tests
flake8
E203,E501,I100,I201,I202,D102,D100,C901,D104,D101,D105,D107,D400,D103,D205,W503
    *.egg-info,*.pyc, .cache,.coverage.*,.gradle, .tox, build,dist, htmlcov.*
max-complexity  20, import-order-style google, application-import-names  flake8
