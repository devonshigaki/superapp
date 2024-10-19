use wasm_bindgen::prelude::*;
use sha2::{Sha256, Digest};
use hex;
use rand::Rng;

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello, {}! Welcome to FreshCredit blockchain.", name)
}

#[wasm_bindgen]
pub fn hash_report(report: &str) -> String {
    let mut hasher = Sha256::new();
    hasher.update(report);
    let result = hasher.finalize();
    hex::encode(result)
}

#[wasm_bindgen]
pub fn store_hash_on_blockchain(hash: &str) -> bool {
    // Placeholder: In a real implementation, this would interact with the Substrate blockchain
    // For now, we'll just return true if the hash is valid
    hash.len() == 64 && hash.chars().all(|c| c.is_ascii_hexdigit())
}

#[wasm_bindgen]
pub fn validate_hash(hash: &str) -> bool {
    // Placeholder: In a real implementation, this would check the hash against the blockchain
    hash.len() == 64 && hash.chars().all(|c| c.is_ascii_hexdigit())
}

#[wasm_bindgen]
pub fn adjust_score_for_fairness(score: u32, user_demographics: &str) -> u32 {
    // Placeholder: Implement fairness logic based on demographics
    score
}

#[wasm_bindgen]
pub fn calculate_block_score(report_data: &str) -> u32 {
    // Placeholder: In a real implementation, this would calculate the BlockScore
    // For now, we'll just return a random score between 300 and 850
    use rand::Rng;
    let mut rng = rand::thread_rng();
    rng.gen_range(300..851)
}
