-- Restock Notifications Table
CREATE TABLE IF NOT EXISTS restock_notifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  newsletter_subscribed BOOLEAN DEFAULT 0,
  notified BOOLEAN DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Collection Drops Waitlist Table
CREATE TABLE IF NOT EXISTS collection_drops_waitlist (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_restock_email ON restock_notifications(email);
CREATE INDEX IF NOT EXISTS idx_restock_product ON restock_notifications(product_id);
CREATE INDEX IF NOT EXISTS idx_drops_email ON collection_drops_waitlist(email);
CREATE INDEX IF NOT EXISTS idx_restock_created ON restock_notifications(created_at);
CREATE INDEX IF NOT EXISTS idx_drops_created ON collection_drops_waitlist(created_at);
