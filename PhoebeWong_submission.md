# Harvard Data Science Animation Contest Sumbission

# T-test and p-value

**Author**: Phoebe Wong

**Affiliation**: M.S. Data Science Candidate, John A. Paulson School Of Engineering And Applied Sciences (SEAS)
##

**Artifact:**
[Link to web app](https://phoebe.shinyapps.io/t-test-and-p-value/)

**Code:**
[Link GitHub repo](https://github.com/phoebewong/Harvard-DS-animation-contest)

### Explanation

This app helps to build a more intuitive understanding of how the assumption of (pooled) t-test affects the true rejection rate using simulation, and how that shapes our understanding and usage of p-value. The first tab of the app provides some background information and interactive components that allow people to modify sample statistics and provide the simulated rejection rate according to the user-provided significance level.

The second tab of the app provides some edge cases of how varying variances and sample sizes affect the true rejection rate. Specifically, the app shows how pooled t-test statistics is affected by the two variables and how unpooled t-test statistics correct that by weighting the two sample variances by their respective sample sizes.

The application is inspired by Harvard Stat 139 (Fall 2018), instructed by Mr. Kevin Rader.
