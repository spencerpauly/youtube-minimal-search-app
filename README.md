# About This Project
This search app is built in React and offers a minimal search browser for youtube. It's built with the goal of allowing me to use youtube for research and learning while not getting distracted by recommended videos.

## How to run

```
npm run build
```

## How to build/deploy

Get PID of process currently running on port:
```
lsof -i :3002
```
Kill process:
```
kill <pid>
```
Start new spotify statistics process:
```
setsid serve -s build -l 3002
```
* CTRL+L to break from GUI


## Potential bugs/security risks
None

## Future todo

## Other
