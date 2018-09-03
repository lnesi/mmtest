# Media Molecule Test

## Demo

https://lnesi.github.io/mmtest/index.html

### Install

```
git clone https://github.com/lnesi/mmtest.git
```

#### Requirements
Node +9
```
npm install
```

### Development
Start local devleopment server
```
npm run start
```
### Build
Build compile version for host
```
npm run build
```
### Deploy

Deploy to Github Pages

```
npm run deploy
```
### Unit Testing

```
npm run test
```

#### Results
```
  App Component
    ✓ has Seats box (8ms)
    ✓ has Whiteboard

  Whiteboard Component
    ✓ renders container (8ms)
    ✓ has canvas (10ms)

  Controls Component
    ✓ renders container (2ms)
    ✓ has leave button (2ms)
    ✓ has clear button (1ms)

  Seat Component
    ✓ renders container (2ms)
    ✓ has btn seat (2ms)
    ✓ has online status (1ms)
    ✓ has online status has offline (1ms)

  Seats Component
    ✓ renders container (9ms)
    ✓ renders list (2ms)

```