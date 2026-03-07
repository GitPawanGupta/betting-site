# 📊 Database Information

## 🗄️ MongoDB Database Path & Details

### Connection String:
```
mongodb://localhost:27017/betting
```

### Database Details:
```
Host: localhost
Port: 27017
Database Name: betting
Collection Name: users (for user credentials)
```

## 📂 Database Structure:

### Database: `betting`

#### Collection: `users` (User Credentials)
**Path:** `betting.users`

**Documents:**
```javascript
{
  _id: ObjectId("69ab481ec904e72ffb0d976f"),
  userId: "newuser123",
  password: "newpass456",
  ipAddress: "::1",
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
  source: "landing-page",
  createdAt: ISODate("2026-03-06T21:33:18.362Z"),
  __v: 0
}
```

## 🔍 Physical File Location:

### Windows Default Path:
```
C:\Program Files\MongoDB\Server\[version]\data\
```

### Common Locations:
```
C:\data\db\
C:\Program Files\MongoDB\Server\7.0\data\
C:\Program Files\MongoDB\Server\6.0\data\
```

### Database Files:
```
betting/
├── collection-0-*.wt (users collection)
├── index-*.wt (indexes)
└── WiredTiger.* (storage engine files)
```

## 🔧 How to Find Your MongoDB Data Path:

### Method 1: Check MongoDB Config
```bash
# Find MongoDB config file
C:\Program Files\MongoDB\Server\[version]\bin\mongod.cfg

# Look for:
storage:
  dbPath: C:\data\db
```

### Method 2: Check Running Process
```powershell
# PowerShell command
Get-Process mongod | Select-Object Path
```

### Method 3: MongoDB Shell
```bash
# If mongosh is installed
mongosh
use admin
db.adminCommand({getCmdLineOpts: 1})
```

## 📱 Access Database:

### Option 1: MongoDB Compass (GUI)
```
1. Download: https://www.mongodb.com/try/download/compass
2. Install MongoDB Compass
3. Connect to: mongodb://localhost:27017
4. Select database: gaming-platform
5. Select collection: leads
6. View all documents
```

### Option 2: API Endpoint (Easiest)
```
GET http://localhost:5001/api/leads/all

Response:
{
  "success": true,
  "count": 1,
  "leads": [
    {
      "_id": "69ab481ec904e72ffb0d976f",
      "userId": "newuser123",
      "password": "newpass456",
      "ipAddress": "::1",
      "createdAt": "2026-03-06T21:33:18.362Z"
    }
  ]
}
```

### Option 3: PowerShell Command
```powershell
# View all leads
Invoke-RestMethod -Uri "http://localhost:5001/api/leads/all" -Method Get

# View formatted
$response = Invoke-RestMethod -Uri "http://localhost:5001/api/leads/all" -Method Get
$response.leads | Format-Table userId, password, ipAddress, createdAt -AutoSize
```

### Option 4: Browser
```
1. Open: http://localhost:5001/api/leads/all
2. View JSON response in browser
```

## 📊 Current Database Status:

### Leads Collection:
```
Total Documents: 1
Collection Size: ~1 KB
Indexes: _id (default)
```

### Sample Data:
```
Document 1:
- User ID: newuser123
- Password: newpass456
- IP: ::1 (localhost)
- Created: 2026-03-06T21:33:18.362Z
```

## 🔐 Database Security:

### Current Setup (Development):
```
Authentication: Disabled
Access: localhost only
Port: 27017 (default)
```

### Production Recommendations:
```
1. Enable authentication
2. Create database user with password
3. Use SSL/TLS
4. Whitelist IP addresses
5. Change default port
6. Regular backups
```

## 💾 Backup Database:

### Export Leads Collection:
```bash
# Export to JSON
mongoexport --db=betting --collection=users --out=users.json

# Export to CSV
mongoexport --db=betting --collection=users --type=csv --fields=userId,password,ipAddress,createdAt --out=users.csv
```

### Backup Entire Database:
```bash
# Backup
mongodump --db=betting --out=backup/

# Restore
mongorestore --db=betting backup/betting/
```

## 📈 Database Statistics:

### View Stats via API:
```powershell
# Total leads count
$response = Invoke-RestMethod -Uri "http://localhost:5001/api/leads/all" -Method Get
Write-Host "Total Leads: $($response.count)"
```

### View in MongoDB Compass:
```
1. Open MongoDB Compass
2. Connect to: mongodb://localhost:27017
3. Select: gaming-platform
4. Click: leads collection
5. View: Documents tab
```

## 🎯 Quick Access Commands:

### View All Leads:
```powershell
Invoke-RestMethod -Uri "http://localhost:5001/api/leads/all" -Method Get | ConvertTo-Json -Depth 10
```

### Add Test Lead:
```powershell
Invoke-RestMethod -Uri "http://localhost:5001/api/leads/save" -Method Post -ContentType "application/json" -Body '{"userId":"newuser","password":"newpass"}'
```

### Count Leads:
```powershell
$response = Invoke-RestMethod -Uri "http://localhost:5001/api/leads/all" -Method Get
$response.count
```

## 📍 Summary:

**Database Location:**
```
Connection: mongodb://localhost:27017
Database: betting
Collection: users
Physical Path: C:\data\db\ (or MongoDB installation data folder)
```

**Access Methods:**
1. ✅ API: http://localhost:5001/api/leads/all
2. ✅ MongoDB Compass: mongodb://localhost:27017
3. ✅ PowerShell: Invoke-RestMethod commands
4. ✅ Admin Panel: http://localhost:3000/leads (after login)

**Current Data:**
- 1 user credential saved
- All fields working correctly
- Timestamps recorded
- IP addresses tracked

---

**Database Status**: ✅ Active & Working
**Database Name**: betting
**Collection**: users
**Data Saving**: ✅ Confirmed
